module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Rubik"', 'sans-serif']
    },
    colors: {
      'shade': {
        '100': '#F8F8F8',
        '200': '#E0E0E0',
        '300': '#C8C8C8',
        '400': '#888888',
        '500': '#707070',
        '600': '#505050',
        '700': '#383838',
        '800': '#282828',
        '900': '#101010',
      },
      'primary': {
        'blue':'#5847eb',
        'work':'#ff8c66',
        'play':'#56c2e6',
        'study':'#ff5c7c',
        'exercise':'#4acf81',
        'social':'#7536d3',
        'care':'#f1c65b'
      },
      'neutral':{
        'dark_blue':'#0f1424',
        'blue':'#1c1f4a',
        'desaturated_blue':'#6f76c8',
        'pale_blue': '#bdc1ff'
      }
    },
    extend: {
      
    },
  },
  plugins: [],
}
