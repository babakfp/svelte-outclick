export default {
    semi: false,
    tabWidth: 4,
    arrowParens: "avoid",
    overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
}
