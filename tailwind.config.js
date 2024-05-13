/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {},
		colors: {
			HSWprimary: "#101010",
			HSWsecondary: "#1b1b1b",
			HSWsecondary2: "#1b1b1b",
			HSWaccent: "#05ff61",
			HSWtext: "#e4e4e4"
		},
	},
	plugins: [
		require('daisyui'),
	],
}

