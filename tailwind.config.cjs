const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,svelte}"],
	theme: {
		extend: {},
		colors: {
			gray: colors.neutral,
		},
	},
	plugins: [],
}
