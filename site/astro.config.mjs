import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkStripFirstH1 from './src/lib/remark-strip-first-h1';
import remarkDirective from 'remark-directive';
import remarkRcosDirectives from './src/lib/remark-rcos-directives';
import rehypeTableWrap from './src/lib/rehype-table-wrap';
import vercel from '@astrojs/vercel';
import auth from 'auth-astro';

export default defineConfig({
  site: 'https://fruithaven.example',
  output: 'server',
  adapter: vercel(),
  integrations: [svelte(), mdx(), auth({ injectEndpoints: false })],
  markdown: {
    remarkPlugins: [remarkStripFirstH1, remarkDirective, remarkRcosDirectives],
    rehypePlugins: [rehypeTableWrap],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
