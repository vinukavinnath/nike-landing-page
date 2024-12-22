/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#FF6452',
        'primary-hover':'#fa4934'
      },
    },
  },
  plugins: [],
}

