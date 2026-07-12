/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // Tells Tailwind to look at your HTML and JS files
  darkMode: 'class',
  theme: {
      extend: {
          colors: {
              background: '#050505',
              surface: '#0f0f11',
              surfaceBorder: '#222222',
              brand: '#38bdf8',
          },
          fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
          }
      }
  },
  plugins: [],
}