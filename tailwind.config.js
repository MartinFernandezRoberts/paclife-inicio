module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        '3xl': '1890px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
