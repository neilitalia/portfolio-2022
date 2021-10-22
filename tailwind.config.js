const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: ['visited'],
      backgroundColor: ['active'],
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
      },
    },
    colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
