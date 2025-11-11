export default {
	content: ['./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx,vue,svelte}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
				],
				mono: [
					'"JetBrains Mono"',
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace',
				],
			},
			colors: {
				background: 'rgb(var(--color-background) / <alpha-value>)',
				foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
				surface: 'rgb(var(--color-surface) / <alpha-value>)',
				border: 'rgb(var(--color-border) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				'accent-foreground': 'rgb(var(--color-accent-foreground) / <alpha-value>)',
				muted: 'rgb(var(--color-muted) / <alpha-value>)',
			},
			boxShadow: {
				card: '0 20px 45px -20px rgba(15, 23, 42, 0.35)',
			},
			maxWidth: {
				'content-sm': '36rem',
				'content-md': '52rem',
				'content-lg': '72rem',
			},
			animation: {
				'fade-in': 'fade-in 250ms ease-out forwards',
			},
			keyframes: {
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(8px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};

