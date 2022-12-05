module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'roboto-flex': ['Roboto Flex']
			}
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio')
	],
};
