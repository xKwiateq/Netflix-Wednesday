/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "bg-image": "url('../public/bg.jpg')",
        "bg-image-mobile": "url('../public/mobilebg.jpg')",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateX(100%);",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
