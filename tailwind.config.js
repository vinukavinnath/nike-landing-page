/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'palanquin':['Palanquin', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
        'montserrat':['Montserrat', 'sans-serif'],
      },
      colors:{
        'primary':'#FF6452',
        'primary-hover':'#fa4934',
        'background':'#F5F6FF',
      },
    },
  },
  plugins: [],
}

