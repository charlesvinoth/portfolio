/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3e6f3",
          100: "#e1c1e3",
          200: "#ce98d2",
          300: "#b971bf",
          400: "#aa54b1",
          500: "#9b3ba3",
          600: "#8e369d",
          700: "#7d3094",
          800: "#6d2b8b",
          900: "#51237a",
        },
        secondary: {
          50: "#e0faf9",
          100: "#b3f2ef",
          200: "#80eae4",
          300: "#4de1d9",
          400: "#26dad1",
          500: "#00d4c9",
          600: "#00cfc3",
          700: "#00c9bc",
          800: "#00c3b5",
          900: "#00b9a9",
        },
      },
    },
  },
  plugins: [],
};
