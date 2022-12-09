
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'maple-splash': "url('/src/images/backgrounds/bg1.jpg')"
      }
    },
  },
  plugins: [],
}
