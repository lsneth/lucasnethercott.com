import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/page.tsx', './src/app/**/*.tsx'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#020716',
      gray: '#0f162b',
      primary: '#0c9489',
    },
  },
  plugins: [],
}
export default config
