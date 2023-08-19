/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: 'wave 7s ease-in-out 1',
      },
      keyframes: {
        wave: {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0) rotate(0deg)',
          },
          '25%, 75%': {
            transform: 'translateY(-1px) translateX(3px) rotate(1deg)',
          },
          '50%': {
            transform: 'translateY(1px) translateX(-3px) rotate(-1deg)',
          },
        },
      },
      colors: {
        ferrariRed: '#FF2800', // for acent color
        champagneBeige: '#F7E7CE', // this is the color of the logo
        superLightBeige: '#FEFCFA',
        evenMorePaleBeige: '#FEFEFC', // for background
        darkBeige: '#6A5D4B', // for smaller text
        extraDarkBeige: '#3E3526', // for heading
        royalBlue: '#00205B',
        lightBlue: '#0099ff',
        lightGrey: '#CDC9C9'
      }
    },
  },
  plugins: [],
}
