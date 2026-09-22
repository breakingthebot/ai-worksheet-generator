/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['Comic Neue', 'Short Stack', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
