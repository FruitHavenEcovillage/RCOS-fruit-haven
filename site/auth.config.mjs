import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';

const authSecret =
  process.env.AUTH_SECRET ||
  process.env.AUTH_SECRET_1 ||
  'fruit-haven-wysiwyg-editor-temporary-fallback-secret';

export default defineConfig({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: { scope: 'read:user user:email repo' }, // Require repo scope to commit edits
      },
    }),
  ],
  secret: authSecret,
  trustHost: process.env.AUTH_TRUST_HOST === 'true' || Boolean(process.env.VERCEL),
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
