/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#F0F0F0",
        "blue-primary-light": "#1B57B8",
        "blue-primary-dark": "#071A53",
        "blue-secondary-light": "#DEEBFF",
        "blue-secondary-dark": "#B6C2E7",
      },
      screens: {
        // for safe side i increase pixel by +1
        xxxl: "1920px",
        xxl: "1496px",
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
        xs: "100px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
