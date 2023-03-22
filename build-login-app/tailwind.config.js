/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/App.js.{html,js,css}"],
    theme: {
      extend: {
        //** For background color default */
        colors : {
          'regal-blue': '#243c5a',
        }
      },
    },
    plugins: [],      
  }