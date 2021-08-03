module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,

     '10': 10,

     '20': 20,

     '30': 30,

     '40': 40,

     '50': 50,

     '25': 25,

     '50': 50,

     '75': 75,

     '100': 100,
      'auto': 'auto',
    },
    extend: {
      fontSize: {
        '10xl': '12rem'
      },
      screens:{
        '3xl': '1890px',
        '4xl': '3800px'
      },
      colors:{
        techFondo:{
          DEFAULT: '#B8E9F4',
        },
        blue:{
          DEFAULT: '#1b88a8',
        },
        homeFondo:{
          DEFAULT: '#eaf2cb',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
