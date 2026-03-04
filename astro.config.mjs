// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Unslopify',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Jaollo/unslopify' }],
			customCss: [],
			defaultLocale: 'root',
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{
					label: 'Phases',
					items: [
						{ label: 'Phase 1: Unslopify', slug: 'phase-1-unslopify' },
						{ label: 'Phase 2: Enhance', slug: 'phase-2-enhance' },
						{ label: 'Phase 3: Intelligence', slug: 'phase-3-intelligence' },
					],
				},
				{ label: 'Software Catalog', slug: 'software-catalog' },
				{
					label: 'Reference',
					items: [
						{ label: 'Windows Paths', slug: 'reference/windows-paths' },
						{ label: 'Cleanup Targets', slug: 'reference/cleanup-targets' },
					],
				},
			],
		}),
	],
});
