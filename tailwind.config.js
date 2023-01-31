/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['proxima nova'  ],
    },
    
    colors: {
      'blue': '#1fb6ff',
      'skyblue': '#00a8ff',
      'purple': '#706fd3',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'upperorange': '#ff793f',
      'uppergreen': '#33d9b2',
      'luckypoint':'#2c2c54',
      'upperblue':'#474787',
      'green': '#9acd32',
      'lightgreen': '#9dd970',
      'yellow': '#ffb142',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black' : '#191919',
      'notblack': '#353b48',
      'red': '#ff5252',
      'redflower': '#e84118',
      'white': '#f5f6fa',
      'soda': '#7f8fa6',
    },
   
    extend: {},
  },
  plugins: [],
}
