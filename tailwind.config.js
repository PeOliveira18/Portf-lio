/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:{
          100: '#1A202C',
          200: '#171923'
        },
        white:{
          100: '#FFFFFF',
          200: '#EDF2F7'
        }
      }
    },
  },
  plugins: [],
}