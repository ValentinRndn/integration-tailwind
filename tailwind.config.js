/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      purple: '#5D47E9',
    }, 
    screens: {
      'sm': {'max': '639px'}, // jusqu'à 640px
      'md': {'max': '767px'}, // jusqu'à 768px
      'lg': {'max': '1023px'}, // jusqu'à 1024px
      'xl': {'max': '1279px'}, // jusqu'à 1280px
      '2xl': {'max': '1535px'}, // jusqu'à 1536px
    },

    extend: {},
  },
  plugins: [],
}
