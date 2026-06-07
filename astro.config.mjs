// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind CSS v4 is wired in via PostCSS (see postcss.config.mjs), which is
// compatible with Astro 6's Rolldown-based Vite.
// https://astro.build/config
export default defineConfig({
  // Used to build absolute canonical / Open Graph URLs. Update this if the site
  // moves to a custom domain.
  site: 'https://kolli-web-astro.vercel.app',
});
