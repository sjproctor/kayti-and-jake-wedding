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
        moontime: ["Moontime", "Brush Script MT", "serif"],
        alice: ["Alice", "Times New Roman", "serif"],
        garamond: ["Garamond", "serif"],
        montserrat: ["Montserrat", "Garamond", "sans-serif"]
      },
      screens: {
        sm: "640px",
        md: "950px",
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
      error: "#cc0000",
      champagne: "#f7e7ce",
      eucalyptus: "#465c47",
      white: "#ffffff",
      gray: "#6c6868",
      lightGray: "#c4c2c2",
      poppy: "#CA4E46",
      brightGold: "#ECBB80",
      lightGold: "#F6DFC3"
    },
    opacity: {
      50: ".50",
      75: ".75"
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "3rem",
      "5xl": "3.5rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "8rem",
      "9xl": "10rem"
    }
  },
  plugins: []
}
