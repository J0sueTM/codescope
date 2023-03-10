/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      dark: '#222323',
      light: '#f0f6f0',
      easy: '#fce4a8',
      medium: '#71969f',
      hard: '#01334e',
      complex: '#d71a21'
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    extend: {},
  },
  plugins: [],
}
