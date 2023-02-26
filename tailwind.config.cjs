const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,svelte}"],
	theme: {
		colors: {
			white: colors.white,
			gray: colors.neutral,
		},
	},
}
