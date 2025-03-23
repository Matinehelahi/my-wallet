/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html/.",
    "./src/**/*.{js,jsx,ts,tsx}/."
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'bodyColor': '#f8f8f8',
      'blueText': '#5d43db',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl')
  ],
}

