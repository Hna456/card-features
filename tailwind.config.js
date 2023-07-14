/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: '#ea5353',
        cyan: '	#45d3d3',
        orange: '#fcaf4a',
        blue: '#549ef2',
        darkblue: '#4c4e61',
        grayishblue: '#a3a5ae',
        lightgray: '#fafafa'
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

