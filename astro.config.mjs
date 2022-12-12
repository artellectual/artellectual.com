import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://artellectual.com',
  integrations: [mdx(), tailwind(), react(), sitemap()],
  trailingSlash: 'always',
  adapter: cloudflare()
});