export type AuthEnvStatus = {
  isConfigured: boolean;
  missing: string[];
};

export function getAuthEnvStatus(): AuthEnvStatus {
  const missing: string[] = [];
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

  if (isProduction && !process.env.AUTH_SECRET) {
    missing.push('AUTH_SECRET');
  }

  if (!process.env.GITHUB_CLIENT_ID) {
    missing.push('GITHUB_CLIENT_ID');
  }

  if (!process.env.GITHUB_CLIENT_SECRET) {
    missing.push('GITHUB_CLIENT_SECRET');
  }

  return {
    isConfigured: missing.length === 0,
    missing,
  };
}
