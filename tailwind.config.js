/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tajawal", "Cairo", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
};
