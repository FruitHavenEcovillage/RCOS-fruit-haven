import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  prefix: '/api/auth',
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: { scope: 'read:user user:email repo' }, // Require repo scope to commit edits
      },
    }),
  ],
  secret: process.env.AUTH_SECRET || process.env.AUTH_SECRET_1,
  trustHost:
    process.env.AUTH_TRUST_HOST === 'true' ||
    process.env.NODE_ENV !== 'production' ||
    Boolean(process.env.VERCEL),
  callbacks: {
    async signIn({ account }) {
      if (account && account.provider === 'github') {
        const owner = process.env.CMS_GITHUB_OWNER || 'FruitHavenEcovillage';
        const repo = process.env.CMS_GITHUB_REPO || 'RCOS-fruit-haven';
        try {
          const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
              Authorization: `Bearer ${account.access_token}`,
              Accept: 'application/vnd.github.v3+json',
              'User-Agent': 'FruitHaven-CMS'
            }
          });
          if (res.ok) {
            const data = await res.json();
            if (data.permissions && (data.permissions.push || data.permissions.admin)) {
              return true;
            }
          }
        } catch (err) {
          console.error('Error checking permissions', err);
        }
        return '/cms/unauthorized';
      }
      return true;
    },
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
