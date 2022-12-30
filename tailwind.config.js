/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,json}",
    "./pages/**/*.{js,ts,jsx,tsx,json}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      colors: {
        'primary': 'rgb(124 58 237)', //violet-600
        'secondary': 'rgb(217 70 239)', //fuchsia-400
      },
      animation: {
        'ping-in': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1 reverse',
      }
    },
  },
  plugins: [],
}
