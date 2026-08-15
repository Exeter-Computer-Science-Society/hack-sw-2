/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		{ pattern: /^drop-shadow-.+/ },
		{ pattern: /^bg-.+/,
		  variants: ['hover'],
		},
	],

	theme: {
		extend: {
			dropShadow: {
				gold: '0px 0px 10px #FFD700',
				silver: '0px 0px 10px #C0C0C0',
				bronze: '0px 0px 10px #CD7F32',
				gray: '0px 0px 10px #535354',
			},
			aspectRatio: {
				'3/4': '3 / 4',
			},
            fontFamily: {
                marist: ['var(--font-abc-marist)'],
            },
		},
		colors: {
			...colors,
			// ExeHacks retro palette. The HSW* names are kept so pages that were not
			// part of the rebrand (feedback, conditions, past events) pick up the new
			// look without being rewritten. New work should prefer the EXH* names.
			EXHbg: "#0a0b0a",
			EXHsurface: "#11160f",
			EXHsurface2: "#161d14",
			EXHgreen: "#3dff88",
			EXHpurple: "#e264ff",
			EXHtext: "#d6f7da",
			HSWprimary: "#0a0b0a",
			HSWsecondary: "#11160f",
			HSWsecondary2: "#161d14",
			HSWaccent: "#3dff88",
			HSWtext: "#d6f7da",
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

