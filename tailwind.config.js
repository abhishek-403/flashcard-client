/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        salsa: ["Salsa", "cursive"],
        merri: ["Merriweather", "serif"],
        domine: ["Domine", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      transform: {
        "rotate-x-180": "rotateX(180deg)",
        "rotate-y-180": "rotateY(180deg)",
        "rotate-z-180": "rotateZ(180deg)",
      },
      perspective: {
        1500: "1500px",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".perspective-1500": {
          perspective: "1500px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    nextui(),
  ],
};
