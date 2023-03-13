/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        custom: '4px 4px 2px 0 #666',
      },
    },
  },
  plugins: [],
}
