import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter(),
	},
	preprocess: [preprocess({ postcss: true })],
}
