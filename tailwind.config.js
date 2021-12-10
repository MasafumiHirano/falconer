module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      pointerEvents: ['disabled'],
    },
  },
  plugins: [],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      width: {
        '1280': '1280px',
        '1100': '1100px',
        '1050': '1050px',
        '950': '950px',
        '920': '920px',
        '768': '768px',
        '720': '720px',
        '650': '650px',
        '600': '600px',
        '580': '580px',
        '520': '520px',
        '500': '500px',
        '450': '450px',
        '400': '400px',
        '320': '320px',
        '300': '300px',
        '250': '250px',
        '200': '200px',
        '190': '190px',
        '175': '175px',
        '170': '170px',
        '120': '120px',
        '100': '100px',
        '93%': '93%',
        '90%': '90%',
        '49%': '49%',
        '32%': '32%',
        '24%': '24%',
      },
      height: {
        '1000': '1000px',
        '900': '900px',
        '800': '800px',
        '640': '640px',
        '600': '600px',
        '500': '500px',
        '445': '445px',
        '405': '405px',
        '300': '300px',
        '250': '250px',
        '200': '200px',
        '150': '150px',
        '100': '100px',
        '70': '70px',
        '40': '40px',
        '35': '35px',
      },
      fontSize: {
        'base_s': '0.95rem',
        '2.5xl': '1.75rem',
        '1.7rem': '1.7rem',
        '3.5xl': '2rem',
        '4.5xl': '2.8rem',
        'ml': '19px',
        'ms': '15px',
        '25px': '25px',
      },
      colors: {
        'falGLD': '#796B58',
        'falSLD': '#9f9e9f',
        'comGOLD' : '#C1A668',
        'falNAVY': '#1F4370',
        'media_black': '#060000',
        'radio_black': '#5D5D5D',
      },
      minWidth: {
        '200': '200px',
        '210': '210px',
      },
      maxWidth: {
        '1520': '1520px',
        '1050': '1050px',
        '850': '850px',
        '650': '650px',        
      }
    }
  },
}
