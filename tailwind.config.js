/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ferrariRed: '#FF2800', // for acent color
        champagneBeige: '#F7E7CE', // this is the color of the logo
        superLightBeige: '#FEFCFA',
        evenMorePaleBeige: '#FEFEFC', // for background
        darkBeige: '#6A5D4B', // for smaller text
        extraDarkBeige: '#3E3526', // for heading
        royalBlue: '#00205B'
      }
    },
  },
  plugins: [],
}
