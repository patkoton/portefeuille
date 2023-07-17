/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require('tailwindcss/plugin')


module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
        preahvihear: ['"Preahvihear"', ...defaultTheme.fontFamily.sans],
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradImage': "url('/src/assets/images/Gradient.png')",
      },
      // custom user configuration
      bgGradientDeg: {
        75: '75deg',
      }
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFF',
      'black': '#21272A',
      'lightGray': '#F2F4F8',
      'gray': '#697077',
      'lightBlue': '#0F62FE',
      'blue': '#001D6C',
      'borderColor': '#DDE1E6',
      'deepBlue': '#1A0B2E',
      'darkBlue': '#11071F',
      'active': '#7127BA',
      'gradInn': '#763CAC',
      'gradMid': '#2C1250',
      'gradOut': '#693B93',
      'blue2': '#1877F2',
      'grad1': '#130428',
      'grad2': '#251043',
      'grad3': '#38126D',
      'grad4': '#261045',
      'grad5': '#190634',
      'gradBorder': '#4F228D',
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              // values from config and defaults you wish to use most
              values: Object.assign(
                  theme('bgGradientDeg', {}), // name of config key. Must be unique
                  {
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      135: '135deg',
                      163: '163deg',
                  }
              )
          }
       )
    })
  ],
});

