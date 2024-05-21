/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cubePattern: "url('/src/assets/images/patterns/cubes.png')",
        birdsPattern: "url('/src/assets/images/patterns/foggy-birds.png')",
      },
      colors: {
        accent: "#4ADE80",
      },
    },
  },
  plugins: [],
};
