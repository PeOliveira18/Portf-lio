/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cabecalho:{
          100: 'rgb(23, 25, 35)'
        }
      }
    },
  },
  plugins: [],
}