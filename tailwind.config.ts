import type { Config } from "tailwindcss"

const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  content: ["./src/app/page.tsx", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        // https://coolors.co/002b36-014053-229c94-d23683-d4d4d4
        white: "#D4D4D4",
        black: "#002B36",
        gray: "#014053",
        accent1: "#229C94",
        accent2: "#D23683",
      },
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        sans: ["var(--font-ubuntu)", ...fontFamily.sans],
      },
    },
  },
}

export default config
