/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      red: {
        DEFAULT: "#ff357b",
        dark: "#d82d68",
      },
      green: {
        DEFAULT: "#27efde",
        dark: "#24d6c7",
      },
      white: "#fffff",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      heading: ["Playfair Display", "serif"],
    },
    extend: {
      fontSize: {
        xxs: "0.76rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
        },
      });
    }),
  ],
};
