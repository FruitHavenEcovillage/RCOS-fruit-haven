import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import remarkStripFirstH1 from './src/lib/remark-strip-first-h1';

export default defineConfig({
  site: 'https://ecohubs.example',
  integrations: [svelte(), mdx()],
  markdown: {
    remarkPlugins: [remarkStripFirstH1],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
