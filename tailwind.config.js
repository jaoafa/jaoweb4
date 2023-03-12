// Tailwind CSS Configuration
// https://tailwindcss.com/docs/configuration

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      // https://tailwindcss.com/docs/customizing-colors
      current: colors.current,
      inherit: colors.inherit,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      primary: {
        50: '#fff8e2',
        100: '#ffecb5',
        200: '#ffe086',
        300: '#ffd556',
        400: '#ffca34',
        500: '#ffc122',
        600: '#ffb41d',
        700: '#fea11b',
        800: '#fe9119',
        900: '#fd7217',
      },
      secondary: {
        50: '#fce4ec',
        100: '#f8bbd0',
        200: '#f48fb0',
        300: '#f06291',
        400: '#ec4079',
        500: '#e91e63',
        600: '#d81b5f',
        700: '#c2185a',
        800: '#ad1356',
        900: '#880d4e',
      },
      gray: {
        50: '#f2f2f3',
        100: '#e6e7e9',
        200: '#cdced1',
        300: '#b4b5bb',
        400: '#9b9ca3',
        500: '#696b76',
        600: '#50535f',
        700: '#373948',
        800: '#1e2131',
        900: '#05081a',
      },
      danger: colors.red[500],
      warning: colors.amber[400],
      success: colors.lime[600],
      info: colors.cyan[500],
    },
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        'fill-0': 'repeat(auto-fill, minmax(0px, 1fr))',
        'fill-1': 'repeat(auto-fill, minmax(0.25rem, 1fr))',
        'fill-2': 'repeat(auto-fill, minmax(0.5rem, 1fr))',
        'fill-3': 'repeat(auto-fill, minmax(0.75rem, 1fr))',
        'fill-4': 'repeat(auto-fill, minmax(1rem, 1fr))',
        'fill-5': 'repeat(auto-fill, minmax(1.25rem, 1fr))',
        'fill-6': 'repeat(auto-fill, minmax(1.5rem, 1fr))',
        'fill-7': 'repeat(auto-fill, minmax(1.75rem, 1fr))',
        'fill-8': 'repeat(auto-fill, minmax(2rem, 1fr))',
        'fill-9': 'repeat(auto-fill, minmax(2.25rem, 1fr))',
        'fill-10': 'repeat(auto-fill, minmax(2.5rem, 1fr))',
        'fill-11': 'repeat(auto-fill, minmax(2.75rem, 1fr))',
        'fill-12': 'repeat(auto-fill, minmax(3rem, 1fr))',
        'fill-14': 'repeat(auto-fill, minmax(3.5rem, 1fr))',
        'fill-16': 'repeat(auto-fill, minmax(4rem, 1fr))',
        'fill-20': 'repeat(auto-fill, minmax(5rem, 1fr))',
        'fill-24': 'repeat(auto-fill, minmax(6rem, 1fr))',
        'fill-28': 'repeat(auto-fill, minmax(7rem, 1fr))',
        'fill-32': 'repeat(auto-fill, minmax(8rem, 1fr))',
        'fill-36': 'repeat(auto-fill, minmax(9rem, 1fr))',
        'fill-40': 'repeat(auto-fill, minmax(10rem, 1fr))',
        'fill-44': 'repeat(auto-fill, minmax(11rem, 1fr))',
        'fill-48': 'repeat(auto-fill, minmax(12rem, 1fr))',
        'fill-52': 'repeat(auto-fill, minmax(13rem, 1fr))',
        'fill-56': 'repeat(auto-fill, minmax(14rem, 1fr))',
        'fill-60': 'repeat(auto-fill, minmax(15rem, 1fr))',
        'fill-64': 'repeat(auto-fill, minmax(16rem, 1fr))',
        'fill-72': 'repeat(auto-fill, minmax(18rem, 1fr))',
        'fill-80': 'repeat(auto-fill, minmax(20rem, 1fr))',
        'fill-96': 'repeat(auto-fill, minmax(24rem, 1fr))',
      },
      transitionProperty: {
        size: 'width, height',
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              scrollMargin: '6rem',
            },
            h3: {
              scrollMargin: '6rem',
            },
            h4: {
              scrollMargin: '6rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/composables/**/*.{js,ts}',
    './src/plugins/**/*.{js,ts}',
    './src/app.vue',
    './src/error.{js,ts,vue}',
    './nuxt.config.{js,ts}',
  ],
}
