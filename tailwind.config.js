/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,json}",
    "./pages/**/*.{js,ts,jsx,tsx,json}",
  ],
  darkMode: 'class',
  mode: "jit",
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
        'primary': 'rgb(139 92 246)', //violet-500
        'secondary': 'rgb(217 70 239)', //fuchsia-400
        'info': 'rgb(59 130 246)', //blue-500
        'success': 'rgb(34 197 94)', //green-500
        'warning': 'rgb(251 146 60)', //orange-400
        'error': 'rgb(239 68 68)', //red-500
        'base': {
          0: {
            DEFAULT: '#ffffff', // white
            dark: '#000000', // black
          },
          100: {
            DEFAULT: '#f4f4f5', // zinc-100
            dark: '#27272a', // zinc-800
          },
          200: {
            DEFAULT: '#e4e4e7', // zinc-200
            dark: '#18181b', // zinc-900
          },
        },
        'accent': {
          100: {
            DEFAULT: '#52525b', // zinc-600
            dark: '#a1a1aa', // zinc-400
          },
          200: {
            DEFAULT: '#000000', // black
            dark: '#ffffff', // white
          },
        }
      },
      animation: {
        'ping-in': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1 reverse',
      }
    },
  },
  plugins: [],
}
