/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{vue, css, js, ts}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["'Spectral SC'", "'Roboto Flex'", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      "menu-md": [
        "22px",
        {
          lineHeight: "30px",
          fontWeight: "400",
        },
      ],
      "portfolio-md": [
        "28px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "menu-lg": [
        "28px",
        {
          lineHeight: "36px",
          fontWeight: "400",
        },
      ],
      "portfolio-lg": [
        "34px",
        {
          lineHeight: "28px",
          fontWeight: "400",
        },
      ],
      ...defaultTheme.fontSize,
    },
    colors: {
      "theme-color-cursor": "var(--cursor-color)",

      "theme-bg-color": "var(--background-color-primary)",
      "theme-text-color": "var(--text-primary-color)",

      "theme-bg-color-menu": "var(--background-color-menu)",
      "theme-text-color-menu": "var(--text-color-menu)",
      "theme-bg-color-logo": "var(--bg-color-logo)",

      "theme-color-bulb": "#fcac00",
      "brand-darkblue": "#02050b",
      "brand-creamy": "#fdfaf4",
      "colors-loader":
        "#fcac00 transparent var(--background-color-menu) transparent",
      // "colors-loader": "#fcac00 transparent #001b4a transparent",
    },

    extend: {
      animation: {
        "spin-fast": "spin .6s linear infinite",
        "pulse-fast": "pulse .4s linear infinite",
      },
      height: {
        "screen-1/2": "50vh",
        ...defaultTheme.height,
      },
      boxShadow: {
        creamy: "0 0 1px 0.5px #fdfaf4",
        // blue: "0 0 3px 3px #4285f4",
        // gray: "0 1px 3px 0 rgba(60, 64, 67, .3)",
      },
    },
  },
  plugins: [],
};
