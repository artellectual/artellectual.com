import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const pages = ['', 'services/', 'terms/', 'privacy/', 'about/']

// https://astro.build/config
export default defineConfig({
  site: 'https://artellectual.com',
  integrations: [mdx(), tailwind(), react(), sitemap({
   customPages: pages.map((page) => `https://artellectual.com/${page}`)
  })]
});