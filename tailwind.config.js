/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #96E9FB 0%, #ABECD6 100%)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        '400': '400', 
        '500': '500', 
        '600': '600', 
        '700': '700', 
        '800': '800', 
      },
    },
  },
  plugins: [],
}

