import themes from '@devsmeta/bee/dist/esm/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@devsmeta/bee/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: themes('Red'),
    },
  },
  plugins: [],
}

