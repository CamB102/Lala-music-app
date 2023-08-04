/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#231b2e',
        'main-200': '#231b2e',
        'main-300': '#170f23',
        'main-400': '#130c1c',
        'main-500': '#9b4de0'
      },
      colors: {

      },
      keyframes: {
        'slide-right': {
        '0%': {
          '-webkit-transform': 'translateX(-500px)',
          transform: 'translateX(-500px)',
        },
        '100%': {
          '-webkit-transform': 'translateX(0)',
          transform: 'translateX(0)'
        }
      },
      'slide-left': {
        '0%': {
          '-webkit-transform': 'translateX(500px)',
          transform: 'translateX(500px)',
        },
        '100%': {
          '-webkit-transform': 'translateX(0)',
          transform: 'translateX(0)'
        }
      },
      'slide-left2': {
        '0%': {
          '-webkit-transform': 'translateX(500px)',
          transform: 'translateX(500px)',
        },
        '100%': {
          '-webkit-transform': 'translateX(0)',
          transform: 'translateX(0)'
        }
      }
      },
      animation: {
      'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
    }
    },
    screens: {
      '1600': '1600px'
    }
  },
  plugins: [],
}

