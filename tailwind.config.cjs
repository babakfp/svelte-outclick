const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,svelte}"],
    theme: {
        extend: {
            colors: {
                gray: colors.neutral,
            },
            fontFamily: {
                sans: ["Inter", defaultTheme.fontFamily.sans],
            },
        },
    },
}
