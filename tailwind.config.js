import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,svelte}"],
    theme: {
        extend: {
            colors: {
                gray: colors.neutral,
            },
            fontFamily: {
                sans: ['"Exo 2 Variable"', defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        function ({ theme, matchUtilities }) {
            const backgroundSize = "4px 4px"
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
