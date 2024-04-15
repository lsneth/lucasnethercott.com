import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/page.tsx', './src/app/**/*.tsx'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#020617',
      primary: '#0D9488',
    },
  },
  plugins: [],
}
export default config
