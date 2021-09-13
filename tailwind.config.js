module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'main': ['Roboto'],
        'header': ['Nunito'],
      },
      rotate: {
        '270': '270deg',
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      scale: ['group-hover'],
      translate: ['hover'],
    },
  },
  plugins: [],
}
