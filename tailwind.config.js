/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headingEn: "Plein-Bold",
        headingAr: "Readex Pro",
        paragraphEn: "BespokeSans-Regular",
        paragraphAr: "IBM Plex Sans Arabic",
      },
      backgroundImage: {
        cubePattern: "url('/src/assets/images/patterns/cubes.png')",
        geometryPattern:
          "url('/src/assets/images/patterns/inspiration-geometry.png')",
      },
      colors: {
        accent: "#4ADE80",
      },
      boxShadow: {
        inset: "inset 0 -0.4em 0 -0.1em #2563eb",
      },
    },
  },
  plugins: [],
};
