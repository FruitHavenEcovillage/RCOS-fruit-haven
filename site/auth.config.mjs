import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET || process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: { scope: 'read:user user:email repo' }, // Require repo scope to commit edits
      },
    }),
  ],
  secret: import.meta.env.AUTH_SECRET || process.env.AUTH_SECRET,
  trustHost: true,
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
