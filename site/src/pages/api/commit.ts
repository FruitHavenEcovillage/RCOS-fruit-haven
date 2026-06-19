import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import authConfig from '../../../auth.config.mjs';
import { getAuthEnvStatus } from '../../lib/auth-env';
import { cmsConfig, getGitHubContentUrl, getGitHubFileUrl, isEditableMarkdownPath } from '../../lib/cms-config';

export const prerender = false;

function encodeBase64(content: string): string {
  const bytes = new TextEncoder().encode(content);
  let binary = '';
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

export const POST: APIRoute = async ({ request }) => {
  const authEnv = getAuthEnvStatus();
  if (!authEnv.isConfigured) {
    return new Response(
      JSON.stringify({
        error: 'GitHub OAuth is not configured.',
        missing: authEnv.missing,
      }),
      { status: 503 },
    );
  }

  const session = await getSession(request, authConfig);
  if (!session || !session.accessToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized. Please log in.' }), { status: 401 });
  }

  const { path, content, message } = await request.json();
  if (!isEditableMarkdownPath(path)) {
    return new Response(JSON.stringify({ error: 'Unsupported editable path.' }), { status: 400 });
  }
  if (typeof content !== 'string') {
    return new Response(JSON.stringify({ error: 'Missing content.' }), { status: 400 });
  }

  const token = session.accessToken;
  
  try {
    const fileUrl = getGitHubFileUrl(path);
    const getRes = await fetch(fileUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    let sha = undefined;
    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha;
    }

    const base64Content = encodeBase64(content);

    const putRes = await fetch(getGitHubContentUrl(path), {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        message: message || `Update ${path} via CMS`,
        content: base64Content,
        sha: sha,
        branch: cmsConfig.branch 
      }),
    });

    if (!putRes.ok) {
      const errorData = await putRes.json();
      return new Response(JSON.stringify({ error: 'GitHub API Error', details: errorData }), { status: putRes.status });
    }

    return new Response(JSON.stringify({ success: true, message: `Committed ${path} to ${cmsConfig.branch}.` }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: String(error) }), { status: 500 });
  }
};
