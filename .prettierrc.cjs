module.exports = {
	semi: false,
	tabWidth: 4,
	useTabs: true,
	singleQuote: false,
	printWidth: 80,
	arrowParens: "avoid",
	bracketSpacing: true,
	trailingComma: "es5",
	bracketSameLine: false,
	quoteProps: "consistent",
	htmlWhitespaceSensitivity: "strict",
	importOrder: [
		"/^@/", // A regular expression that matches strings that start with a @ symbol
		"^\\$app",
		"^\\$env",
		"^\\$service-worker",
		"^\\$lib/server",
		"^\\$lib/",
		"^\\$(?![^\\/]*\\/)", // A regular expression that matches strings that start with the character $ and do not contain the forward slash /
		"^\\$[^/]*\\/[^/]+", // A regular expression that matches strings that start with the character $ and contain at least one forward slash /
		"^[./]",
	],
	// importOrder: [
	// 	"^@(?!(?:sveltejs/kit)).*$",
	// 	"^svelte",
	// 	"^@sveltejs/kit",
	// ],
	pluginSearchDirs: ["."],
	plugins: [
		require("prettier-plugin-svelte"),
		require("prettier-plugin-tailwindcss"),
		require("@trivago/prettier-plugin-sort-imports"),
	],
	overrides: [
		{ files: "*.svelte", options: { parser: "svelte" } },
		{
			files: "*.md",
			options: {
				tabWidth: 2,
				singleQuote: true,
			},
		},
	],
}
