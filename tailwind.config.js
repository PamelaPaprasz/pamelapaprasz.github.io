/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: 'wave 3s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeOut: 'fadeOut 1s ease-in-out forwards',
        downAndUp: 'downAndUp 2s ease forwards',
        growDown: '400ms ease-in-out forwards',
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
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        downAndUp: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '10%': {
            transform: 'translateY(-10px)',
          },
          '25% 75%': {
            transform: 'translateY(10px)',
          },
          '50%': {
            transform: 'translateY(50px)',
          },
          '100%': {
            transform: 'translateY(-0px)',
          },
        },
        growDown: {
          '0%': {
            transform: 'scaleY(0)'
          },
          '100%': {
            transform: 'scaleY(1)'
          },
        },
        growUp: {
          '0%': {
            transform: 'scaleY(1)'
          },
          '100%': {
            transform: 'scaleY(0)'
          },
        }
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
      },
    },
  },
  plugins: [],
}
