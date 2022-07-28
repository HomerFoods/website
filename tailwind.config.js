/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif']
      },
      colors: {
       'primary': '#FF7E70',
       'secondary': '#F9CF6B',
       'button': '#C8151D',
       'blackfooter': '#222224',
       'section': ('rgba(243,245,254,255)'),
       'sectiond': ('rgba(228,230,244,255)'),
       
      },
      fontSize: {
        'xs': '.75rem',
        'xv': '1.1rem',
        'xs': '1.3rem',
        'xa': '.400rem',
        'xc': '.600rem',
        'xb': '.800rem',
        'sm': '.700rem',
        'tiny': '.900rem',
        'base': '1rem',
        'lg': '1.5rem',
        'la': '1.8rem',
        'xl': '1.4rem',
        '2xl': '.900rem',
        '32xl': '1.2rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  plugins: [],
}
