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
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px white"
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px white"
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px white"
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px white"
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px white"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };
      addUtilities(newUtilities);
    }
  ],
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
        '1480': '1480px',
        '1280': '1280px',
        '1100': '1100px',
        '1080': '1080px',
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
        '290': '290px',
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
        '30%': '30%',
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
        '0.65rem': '0.65rem',
        '0.55rem': '0.55rem',
        'ml': '19px',
        'ms': '15px',
        '25px': '25px',
        'xss': '11px',
        '40px': '40px',
      },
      colors: {
        'falGLD': '#796B58',
        'falSLD': '#9f9e9f',
        'comGOLD' : '#C1A668',
        'falNAVY': '#1F4370',
        'falContact': '#A5A5A5',
        'media_black': '#060000',
        'radio_black': '#5D5D5D',
        'p_yellow': '#ffff00',
        'oemGray': '#E6E6E6',
        'arl_brown': '#60554A',
        'arl_grey': '#EDECEB',
      },
      minWidth: {
        '250': '250px',
        '210': '210px',
        '200': '200px',
        '100': '100px',
        '120': '120px',
      },
      maxWidth: {
        '1520': '1520px',
        '1280': '1280px',
        '1050': '1050px',
        '1000': '1000px',
        '850': '850px',
        '650': '650px',
        '500': '500px',
        '50%': '50%',
      }
    }
  },
}
