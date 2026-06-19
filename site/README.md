# Fruit Haven Docs Site

Static site around the RCOS-Fruit Haven repo. Astro 6 + Svelte 5 + Tailwind 4.

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview
```

## Deploy

Vercel: set project root to `site/`. Build command `astro build`. Output
directory `dist/`.

## CMS

The site includes a GitHub-backed Markdown CMS at `/cms`. It uses GitHub OAuth
for login and commits edited Markdown through `/api/commit`.

Required environment variables:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `AUTH_SECRET`

Optional environment variables:

- `AUTH_TRUST_HOST=true`
- `CMS_GITHUB_OWNER` defaults to `FruitHavenEcovillage`
- `CMS_GITHUB_REPO` defaults to `RCOS-fruit-haven`
- `CMS_GITHUB_BRANCH` defaults to `main`

Set the GitHub OAuth callback URL to:

```text
https://<your-domain>/api/auth/callback/github
```

## Theming a fork

Edit `src/styles/theme.css` — all colors, fonts, radii live there as CSS
variables consumed by Tailwind 4's `@theme` directive.

## Content sources

Content files live in the parent repo and are pulled in via Astro content
collections (see `src/content.config.ts`):

- `../layers/*/*.md` — artifacts grouped by layer
- `../proposals/{passed,rejected}/*.md` — governance proposals
- `../proposals/future.md` — future-proposals doc
- `../compliance/checklist.md` — compliance status

Site-local content (FAQ, landing dashboard data, layer summaries) lives in
`src/content/` and `src/data/`.
