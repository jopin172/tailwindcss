module.exports = {
  mode: 'jit',
  purge: [
    './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../images/wave-white.png)',
        'wave-pattern-dots': 'url(../images/pattern-white-dots.png)'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
