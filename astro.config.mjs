import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://artellectual.com',
  integrations: [mdx(), tailwind(), react(), sitemap()],
  trailingSlash: 'always'
});