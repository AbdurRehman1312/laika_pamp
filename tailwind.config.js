/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#4563FF",
        secondary: "#FF4040",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bungee: ["Bungee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
