/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          // 50: "#efe6f2",
          // 100: "#d8c1df",
          // 200: "#be98ca",
          // 300: "#a46eb4",
          // 400: "#914fa4",
          // 500: "#7d3094",
          // 600: "#752b8c",
          // 700: "#6a2481",
          // 800: "#601e77",
          // 900: "#4d1365",

          50: "#eae7f7",
          100: "#c9c3eb",
          200: "#a69bde",
          300: "#8272d1",
          400: "#6754c7",
          500: "#4c36bd",
          600: "#4530b7",
          700: "#3c29ae",
          800: "#3322a6",
          900: "#241698",
        },
        secondary: {
          50: "#e0f9fa",
          100: "#b3f0f2",
          200: "#80e7ea",
          300: "#4ddde1",
          400: "#26d5da",
          500: "#00ced4",
          600: "#00c9cf",
          700: "#00c2c9",
          800: "#00bcc3",
          900: "#00b0b9",
        },
      },
    },
  },
  plugins: [],
};
