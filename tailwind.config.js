/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
