module.exports = {
    semi: false,
    tabWidth: 4,
    arrowParens: "avoid",
    overrides: [
        { files: "*.svelte", options: { parser: "svelte" } },
        { files: "*.md", options: { tabWidth: 2 } },
    ],
    plugins: [
        require("prettier-plugin-svelte"),
        require("prettier-plugin-tailwindcss"),
    ],
}
