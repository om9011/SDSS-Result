/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'fixed': '82.5vh', // Add custom height utility
      },
      spacing: {
        '13': '3.25rem', // Add custom spacing utility
      },
    },
  },
  plugins: [],
}
