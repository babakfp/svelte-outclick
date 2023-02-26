import adapter from "@sveltejs/adapter-vercel"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			"$libd": "src/libd",
			"svelte-outclick": "src/lib/OutClick.svelte",
		},
	},
	preprocess: [preprocess({ postcss: true })],
}

export default config
