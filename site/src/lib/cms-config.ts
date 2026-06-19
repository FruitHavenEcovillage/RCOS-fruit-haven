export type CmsConfig = {
  owner: string;
  repo: string;
  branch: string;
};

export const cmsConfig: CmsConfig = {
  owner: process.env.CMS_GITHUB_OWNER || 'FruitHavenEcovillage',
  repo: process.env.CMS_GITHUB_REPO || 'RCOS-fruit-haven',
  branch: process.env.CMS_GITHUB_BRANCH || 'main',
};

function encodeGitHubPath(path: string): string {
  return path
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/');
}

export function getGitHubContentUrl(path: string): string {
  const { owner, repo } = cmsConfig;
  return `https://api.github.com/repos/${owner}/${repo}/contents/${encodeGitHubPath(path)}`;
}

export function getGitHubFileUrl(path: string): string {
  const { branch } = cmsConfig;

  return `${getGitHubContentUrl(path)}?ref=${encodeURIComponent(branch)}`;
}

export function isEditableMarkdownPath(path: unknown): path is string {
  if (typeof path !== 'string') return false;
  if (!path.endsWith('.md')) return false;
  if (path.includes('\\') || path.includes('..')) return false;

  return /^(layers|proposals|compliance)\//.test(path) || path === 'README.md';
}
