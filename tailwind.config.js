/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			dropShadow: {
				gold: '0px 0px 10px #FFD700',
				silver: '0px 0px 10px #C0C0C0',
				bronze: '0px 0px 10px #CD7F32',
				gray: '0px 0px 10px #535354',
			},
		},
		colors: {
			HSWprimary: "#101010",
			HSWsecondary: "#1b1b1b",
			HSWsecondary2: "#1b1b1b",
			HSWaccent: "#05ff61",
			HSWtext: "#e4e4e4",
			gold: "#FFD700",
			silver: "#C0C0C0",
			bronze: "#CD7F32",
			gray: "#808080",
		},
	},
	plugins: [
		require('daisyui'),
	],
}

