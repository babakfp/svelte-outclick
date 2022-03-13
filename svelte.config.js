import adapter from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'

const config = {
	kit: {
		adapter: adapter(),
	},
  preprocess: [
		sveltePreprocess({
			postcss: true,
		})
	],
}

export default config
