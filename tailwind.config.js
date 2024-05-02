/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {},
		colors: {
			primary: "#101010",
			secondary: "#1b1b1b",
			secondary2: "#1b1b1b",
			accent: "#05ff61",
			text: "#e4e4e4"
		},
	},
	plugins: [],
}

