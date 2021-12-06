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
        'wave-pattern-dots': 'url(../images/pattern-white-dots.png)',
        'pattern-characters-red': 'url(../images/pattern-characters-red.png)',
        'pattern-character-mario': 'url(../images/character-l.png)',
        'wave-pink': 'url(../images/wave-pink.png)',
        'yellow-dots': 'url(../images/pattern-yellow-dots.png)',
      }),
      screens: {
        'xsm': '320px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
