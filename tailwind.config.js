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
          200: '#171923',
          300: '#2D3748'
        },
        white:{
          100: '#FFFFFF',
          200: '#EDF2F7'
        },
        fundoIcon:{
          100: '#bcc1d413',
          200: '#3C3E46',
          300: '#E2E8F0',
          400: '#cfd4db',
          500: '#4d505a'
        },
        texto:{
          100: '#2F8A89'
        }
      }
    },
  },
  plugins: [],
}