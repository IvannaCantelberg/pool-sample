/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'r-sm': '0 0px 10px 4px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [],
}

