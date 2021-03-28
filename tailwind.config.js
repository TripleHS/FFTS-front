const colors = require('tailwindcss/colors')
module.exports = {
  purge: [ ],
  darkMode: false,
  theme: {
    extend: {
      colors:{
        primaryBg:'#fafafa',
        secondaryBg:'#00b8bc',
        footer:'#404e7c',
        danger:'#e3342f'
      }
    },
  },

  variants: {
    extend:{}
  },

  plugins: [],
}
