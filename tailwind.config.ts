import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: ['./src/app/page.tsx', './src/app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        // https://coolors.co/002b36-014053-229c94-268ad3-859900-b48800-cb4b16-d23683-92a0a1
        black: '#002B36',
        gray: '#014053',
        white: '#92A0A1',
        accent1: '#229C94',
        accent2: '#268AD3',
        accent3: '#859900',
        accent4: '#B48800',
        accent5: '#D23683',
        accent6: '#CB4B16',
      },
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        sans: ['var(--font-ubuntu)', ...fontFamily.sans],
      },
    },
  },
}

export default config
