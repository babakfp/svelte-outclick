import adapter from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
	},
  preprocess: [
		sveltePreprocess({
			postcss: true,
		})
	],
}

export default config
