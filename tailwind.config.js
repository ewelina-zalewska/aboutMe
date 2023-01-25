/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue, css,  js, ts}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-darkblue": "#02050b",
        "brand-creamy": "#fffdd0",
        // "brand-blue-2": "#4285f4",
        // "brand-green-1": "#137333",
      },
      boxShadow: {
        creamy: "0 0 1px 0.5px #fffdd0",
        // blue: "0 0 3px 3px #4285f4",
        // gray: "0 1px 3px 0 rgba(60, 64, 67, .3)",
      },
    },
  },
  plugins: [],
};
