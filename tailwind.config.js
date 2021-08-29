const Mazeraa = './src/assets/Mazeraa.jpg'

module.exports = {
  purge: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: [ 'Montserrat', 'sans-serif' ],
      secondary: [ 'Mako', 'sans-serif' ],
    },
    extend: {
      colors: {
        white: '#fcf7f8ff',
        lightgray: '#ced3dcff',
        lavander: '#aba9c3ff',
        blue: '#275dadff',
        darkgray: '#5b616aff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit'
}
