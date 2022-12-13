/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray-1': "#161A20",
      'gray-2': "#45484C",
      'gray-3': "#B2B2B2",
      'gray-4': "#2B2B2B",
      'slider-color': '#62D5B0',
      ...colors
    },
    fontFamily: {
      sans: ['Trade Gothic LT Condensed', 'sans-serif'],
      condensed: ['Trade Gothic LT Condensed', 'sans-serif']
    },
    extend: {},
    screens: {
      'mobile': {'max': '639px'},
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
