const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
			colors: {
				svelte: '#ff3e00',
			},
			borderRadius: {
				DEFAULT: '.75rem',
			},
		},
  },
  plugins: [],
}

module.exports = config
