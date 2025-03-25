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
      'textAll': '#222',
      'texthome': 'rgb(68, 68, 68);',
      'asilver': '#444',
      'backgroundsilver': 'rgba(191, 191, 191, .09);',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl')
  ],
}

