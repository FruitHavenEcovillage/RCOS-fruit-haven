import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const session = await getSession(request);
  if (!session || !session.accessToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized. Please log in.' }), { status: 401 });
  }

  const { path, content, message } = await request.json();
  if (!path || !content) {
    return new Response(JSON.stringify({ error: 'Missing path or content' }), { status: 400 });
  }

  const token = session.accessToken;
  // TODO: Make these configurable via environment variables in Vercel
  const owner = 'FruitHavenEcovillage';
  const repo = 'RCOS-fruit-haven'; 
  const branch = 'feature/wysiwyg-editor'; // The branch we are testing on
  
  try {
    // 1. Get the current file SHA (Required to update an existing file via GitHub API)
    const fileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
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

    // 2. Encode content to Base64 (Unicode safe)
    const base64Content = btoa(unescape(encodeURIComponent(content)));

    // 3. Commit the new file directly to GitHub
    const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        message: message || `Update ${path} via CMS`,
        content: base64Content,
        sha: sha,
        branch: branch 
      }),
    });

    if (!putRes.ok) {
      const errorData = await putRes.json();
      return new Response(JSON.stringify({ error: 'GitHub API Error', details: errorData }), { status: putRes.status });
    }

    return new Response(JSON.stringify({ success: true, message: 'Commit successful!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
