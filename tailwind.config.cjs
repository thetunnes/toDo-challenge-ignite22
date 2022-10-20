/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: { 
        "sm": { "max": "640px"}
      }
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      "purple-dark": "#5E60CE",
      "purple-light": "#8284fa",
      "blue": "#4EA8DE",
      "blue-dark": "#1E6F9F",
      gray: {
        700: "#0d0d0d",
        600: "#1a1a1a",
        500: "#262626",
        400: "#333333",
        300: "#808080",
        200: "#D9D9D9",
        100: "#f2f2f2"
      },
      danger: "#e25858"
    },
    fontSize: {
      "sm": 12,
      "md": 14,
      "lg": 16,
      "2xl": 40
    }
  },
  plugins: [],
}
