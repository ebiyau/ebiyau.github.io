// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// The site's public address. Enables the canonical URL, social preview image,
	// sitemap and the robots.txt sitemap line.
	site: 'https://ebiyau.github.io',
	integrations: [sitemap()],
});
