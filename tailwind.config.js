/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      black: "#1c1c1c",
      white: "#ffffff",
      primary: "#eba639",
      topic: "#f3c650",
      "grid-grey": "#ebebeb",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
