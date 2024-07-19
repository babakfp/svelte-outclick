/** @type {import("prettier").Config & import("prettier-plugin-svelte").PluginConfig & import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
export default {
    semi: false,
    tabWidth: 4,
    plugins: [
        "prettier-plugin-svelte",
        "prettier-plugin-tailwindcss",
        "@ianvs/prettier-plugin-sort-imports",
    ],
    importOrder: [
        "^@",
        "<THIRD_PARTY_MODULES>",
        "^\\$(?!lib/)",
        "^\\$lib/",
        "^[.]",
    ],
}
