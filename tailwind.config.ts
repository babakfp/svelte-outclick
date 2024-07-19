import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"

export default {
    content: ["./src/**/*.{html,svelte}"],
    theme: {
        extend: {
            colors: {
                gray: colors.neutral,
            },
            fontFamily: {
                sans: "Exo2",
            },
        },
    },
    plugins: [
        ({ theme, matchUtilities }) => {
            const backgroundSize = "4px 4px"
            const backgroundImage = (color: string) =>
                `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`

            matchUtilities(
                {
                    "bg-stripes": (value: string) => ({
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
} satisfies Config
