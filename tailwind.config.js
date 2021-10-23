const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const extendedColors = {
  ...colors,
  ...{
    darkestBlue: '#00040D',
    darkTeal: '#225459'
  }
}

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: extendedColors,
      textColor: ['visited'],
      backgroundColor: ['active'],
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
