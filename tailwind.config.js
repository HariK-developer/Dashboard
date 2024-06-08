/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'drawer': '#161717',
        'background': '#242424'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]

};
