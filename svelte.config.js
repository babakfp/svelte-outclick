import adapter from "@sveltejs/adapter-vercel"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter(),
	},
	preprocess: [preprocess({ postcss: true })],
}
