module.exports = {
  purge: [ ],
  darkMode: false,
  theme: {
    textColor:theme => theme('colors'),
    textColor: {
      'primary': '#000000',
      'secondary': '#00b8bc',
      'danger': '#e3342f'
    },

    backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'footer': '#404e7c',
       'danger': '#e3342f',
      }),
    },
    variants: {
      extend: {
        textColor: ['active'],
        backgroundColor: ['active'],
      },
  },
  plugins: [],
}