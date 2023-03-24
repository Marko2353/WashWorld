/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {},
  },
  plugins: [],
}