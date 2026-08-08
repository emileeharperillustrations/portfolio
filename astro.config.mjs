// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { visualizer } from "rollup-plugin-visualizer";


// https://astro.build/config
export default defineConfig({
  site: "https://emileeharperillustrations.github.io/",
  base: "/portfolio",
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