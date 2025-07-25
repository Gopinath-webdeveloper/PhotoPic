/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#161122', // deep dark purple background
        },
        text: {
          DEFAULT: '#FFFFFF', // crisp white text
        },
        btn: {
          DEFAULT: '#9333ea', // vibrant purple button
          hover: '#a855f7',   // brighter purple hover
        },
        accent: {
          DEFAULT: '#d946ef', // energetic magenta accent
          hover: '#e879f9',   // brighter magenta hover
        },
      },
    },
  },
  plugins: [],
};

