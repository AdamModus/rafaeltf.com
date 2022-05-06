/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          100: 'var(--color-primary-100)', // #ECEFF5
          200: 'var(--color-primary-200)', // #C3CBDC
          300: 'var(--color-primary-300)', // #9BA8C2
          400: 'var(--color-primary-400)', // #7686A6
          DEFAULT: 'var(--color-primary)', // #526488
          600: 'var(--color-primary-600)', // #3E4F70
          700: 'var(--color-primary-700)', // #2C3A57
          800: 'var(--color-primary-800)', // #1C263B
          900: 'var(--color-primary-900)', // #0D131E
        },
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
  content: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    },
  },
};
