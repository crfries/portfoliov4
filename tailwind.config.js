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
        blue: '#275dadff',
        darkgray: '#5b616aff'
      },
    },
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit'
}
