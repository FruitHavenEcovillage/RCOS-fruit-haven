import { Auth } from '@auth/core';
import authConfig from '../../../../auth.config.mjs';

export const prerender = false;

const handler = async ({ request }: any) => {
  if (!process.env.AUTH_SECRET) {
    process.env.AUTH_SECRET = "92e18825187c477b80112cd4f9ba8164";
  }
  process.env.AUTH_TRUST_HOST = "true";

  return Auth(request, authConfig);
};

export const GET = handler;
export const POST = handler;
