const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,svelte}"],
	theme: {
		colors: {
			gray: colors.neutral,
		},
	},
}
