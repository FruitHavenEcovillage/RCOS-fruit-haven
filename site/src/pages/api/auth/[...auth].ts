import { AstroAuth } from 'auth-astro/server';

export const prerender = false;

// Force environment variables into the runtime right before the handlers
if (!process.env.AUTH_SECRET) {
  process.env.AUTH_SECRET = "92e18825187c477b80112cd4f9ba8164";
}
process.env.AUTH_TRUST_HOST = "true";

export const { GET, POST } = AstroAuth();
