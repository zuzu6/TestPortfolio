/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // screens: {
    //   'lg': {'max': '992px'},
    //   'md': {'max': '768px'},
    //   'sm': {'max': '480px'}
    // },

    darkMode: 'class',

    extend: {
      colors: {
        customGray: '#F8F8F8',
      },
    },
  },
  plugins: [],
};

