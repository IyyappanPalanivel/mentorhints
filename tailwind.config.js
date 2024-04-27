/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", 'sans-serif'],
        dancing: ["Dancing Script", 'cursive']
      },
    },
    colors: {
      'brandPrimary':'#0B93DB',
      'brandSecondary':'#FF914D',
      'neutralWhite':'#FFFFFF',
    }
  },
  plugins: [],
}
