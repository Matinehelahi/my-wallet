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
      'violet': '#ddd6fe',
      'violets': '#ede9fe',
      'violetss': '#f5f3ff',
      'dark-hover-off': '#5d43db;',
      'buttonHome': '#007aff;',
      'red': '#b91c1c',

    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl')
  ],
}

