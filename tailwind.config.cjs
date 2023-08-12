const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

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
    plugins: [
        function ({ theme, matchUtilities }) {
            const backgroundSize = "9.07px 9.07px"
            const backgroundImage = color =>
                `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`

            matchUtilities(
                {
                    "bg-stripes": value => ({
                        "background-image": backgroundImage(value),
                        "background-size": backgroundSize,
                    }),
                },
                {
                    values: flattenColorPalette(theme("colors")),
                    type: "color",
                },
            )
        },
    ],
}
