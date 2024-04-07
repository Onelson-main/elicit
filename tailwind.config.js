/** @type {import('tailwindcss').Config} */
// const nativewind = require("nativewind/tailwind/css")

const { colours } = require('./src/core/style');

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.js",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: colours,
      fontSize: {
        title: 32
      },
    },
  },
  // plugins: [nativewind()],
}