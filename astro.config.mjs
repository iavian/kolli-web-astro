// @ts-check
import { defineConfig } from 'astro/config';

// Tailwind CSS v4 is wired in via PostCSS (see postcss.config.mjs), which is
// compatible with Astro 6's Rolldown-based Vite.
// https://astro.build/config
export default defineConfig({
  site: 'https://kollihills.example.com',
});
