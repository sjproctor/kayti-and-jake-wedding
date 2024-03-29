/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        moontime: ["Moontime", "sans-serif"],
        alice: ["Alice", "sans-serif"]
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      margin: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px"
      }
    },
    colors: {
      cream: "#f9f5f2",
      greenGold: "#b2935b",
      greenGoldLight: "#ded1b8",
      blackFont: "#121f32",
      error: "#cc0000"
    },
    opacity: {
      50: ".50"
    }
  },
  plugins: []
}
