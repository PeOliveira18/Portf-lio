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
          500: '#4d505a',
          600: '#FFFFFF14',
          700: '#ffffff44',
          800: '#E2E8F0',
          900: '#BEE3F8',
          1000: '#2D3748',
          1100: '#E6FFFA',
          1200: '#273841'
        },
        texto:{
          100: '#2F8A89',
          200: '#718096',
          300: '#1A202C',
          400: '#90CDF4',
          500: '#2f8a88d0',
          600: '#90CDF4',
          700: '#4A555E',
          800: '#80E4D7',
          900: '#2C7A7B'
        }
      },
    },
  },
  plugins: [],
}