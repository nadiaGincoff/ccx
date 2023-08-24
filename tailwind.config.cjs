/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				white: '#fefefe',
				primary: '#f9ac45ff',
				black: '#000000',
				transparent: 'transparent',
				dark: '#10111e'
			}
		},
		screens: {
			sm: '350px',
			md: '550px',
			lg: '976px',
			xl: '1440px'
		}
	},
	plugins: []
}
