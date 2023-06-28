/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#21272A',
      'lightGray': '#F2F4F8',
      'gray': '#697077',
      'lightBlue': '#0F62FE',
      'blue': '#001D6C',
      'borderColor': '#DDE1E6',
    },
  },
  plugins: [],
});

