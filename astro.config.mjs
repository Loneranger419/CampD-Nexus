// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://loneranger419.github.io/CampD-Nexus/',
	base: '/CampD-Nexus/',
	output: 'static',
	integrations: [tailwind({ applyBaseStyles: false })],
});
