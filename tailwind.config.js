/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ferrariRed: '#FF2800',
        champagneBeige: '#F7E7CE',
        superLightBeige: '#FEFCFA',
        evenMorePaleBeige: '#FEFEFC',
        darkBeige: '#6A5D4B',
        extraDarkBeige: '#3E3526'
      }
    },
  },
  plugins: [],
}
