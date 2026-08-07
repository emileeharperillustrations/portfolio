// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://foopis23.github.io/",
  base: "/emilee-harper-portfolio",
  integrations: [sitemap()]
});