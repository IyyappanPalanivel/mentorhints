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
        dancing: ["Dancing Script", 'cursive'],
        anton: ["Anton",'sans-serif']
      },
    },
    colors: {
      'brandPrimary':'#0B93DB',
      'brandSecondary':'#FF914D',
      'skyBlue':"#87ceeb",
      'white':'#FFFFFF',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'neutralGray': '#6D737A',
    }
  },
  plugins: [],
}
