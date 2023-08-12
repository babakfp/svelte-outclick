export default {
    semi: false,
    tabWidth: 4,
    arrowParens: "avoid",
    overrides: [
        { files: "*.svelte", options: { parser: "svelte" } },
        { files: "*.md", options: { tabWidth: 2 } },
    ],
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
}
