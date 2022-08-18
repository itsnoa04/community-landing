/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "10-screen": "10vw",
        "20-screen": "20vw",
        "30-screen": "30vw",
        "40-screen": "40vw",
        "50-screen": "50vw",
        "60-screen": "60vw",
        "70-screen": "70vw",
        "80-screen": "80vw",
        "90-screen": "90vw",
      },
    },
  },
  plugins: [],
};
