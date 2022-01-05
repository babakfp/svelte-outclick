const tailwindCss = require('tailwindcss')
const autoPrefixer = require('autoprefixer')

const dev = process.env.NODE_ENV === 'development'

const config = {
  plugins: [
    tailwindCss(),
    !dev && autoPrefixer(),
  ],
}

module.exports = config
