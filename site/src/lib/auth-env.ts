export type AuthEnvStatus = {
  isConfigured: boolean;
  missing: string[];
};

export function getAuthEnvStatus(): AuthEnvStatus {
  const missing: string[] = [];

  if (!process.env.GITHUB_CLIENT_ID) {
    missing.push('GITHUB_CLIENT_ID');
  }

  if (!process.env.GITHUB_CLIENT_SECRET) {
    missing.push('GITHUB_CLIENT_SECRET');
  }

  if (!process.env.AUTH_SECRET && !process.env.AUTH_SECRET_1) {
    missing.push('AUTH_SECRET');
  }

  return {
    isConfigured: missing.length === 0,
    missing,
  };
}
