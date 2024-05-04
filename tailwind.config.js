/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", 'sans-serif'],
        dancing: ["Dancing Script", 'cursive'],
        anton: ["Anton",'sans-serif'],
        poppins: ["Poppins",'sans-serif'],
      },
    },
    colors: {
      'brandPrimary':'#0B93DB',
      'brandSecondary':'#FF914D',
      'skyBlue':"#87ceeb",
      'lightBlue':"#E4F0FF",
      'white':'#FFFFFF',
      'gray-dark': '#273444',
      'gray': '#6D737A',
      'gray-light': '#d3dce6',
      'neutralGray': '#6D737A',
      'neutralDGray': '#363A3D',
      'navTextColor': '#131B20',
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}
