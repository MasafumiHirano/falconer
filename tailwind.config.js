module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    width: {
     '1100': '1100px',
     '920': '920px',
     '768': '768px',
     '720': '720px',
     '450': '450px',
     '320': '320px',
     '120': '120px',
    },
    height: {
     '640': '640px',
     '405': '405px',
     '300': '300px',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
}
