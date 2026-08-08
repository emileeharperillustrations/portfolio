// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { visualizer } from "rollup-plugin-visualizer";


// https://astro.build/config
export default defineConfig({
  site: "https://foopis23.github.io/",
  base: "/emilee-harper-portfolio",
  vite: {
    plugins: [visualizer({
      emitFile: true,
      filename: "stats.html",
    })]
  },
  integrations: [
    sitemap()
  ]
});