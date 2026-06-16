import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';
import remarkStripFirstH1 from './src/lib/remark-strip-first-h1';
import remarkDirective from 'remark-directive';
import remarkRcosDirectives from './src/lib/remark-rcos-directives';
import rehypeTableWrap from './src/lib/rehype-table-wrap';

export default defineConfig({
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  site: 'https://fruithaven.example',
  integrations: [svelte(), mdx()],
  markdown: {
    remarkPlugins: [remarkStripFirstH1, remarkDirective, remarkRcosDirectives],
    rehypePlugins: [rehypeTableWrap],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
