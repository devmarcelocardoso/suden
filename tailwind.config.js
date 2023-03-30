/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: '#242021',
      'black-700': '#666364',
      'black-500': '#929090',
      'black-200': '#D3D2D3',
      'black-100': '#EAE9E9',
      red: '#DA251D',
      'red-500': '#ED928E',
      green: '#00923F',
      'green-500': '#80C99F',
      yellow: '#FFCA08',
    },
    fontFamily: {
      doppio: ['Doppio One', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

