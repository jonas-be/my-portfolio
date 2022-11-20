/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'costum-gray-50': '#e4e7ed',
        'costum-gray-100': '#c7ced9',
        'costum-gray-200': '#96a0b0',
        'costum-gray-300': '#636f80',
        'costum-gray-400': '#4b5666',
        'costum-gray-500': '#3b4554',
        'costum-gray-600': '#2b333f',
        'costum-gray-700': '#202731',
      },
      animation: {
        'ping-in': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1 reverse',
      }
    },
  },
  plugins: [],
}
