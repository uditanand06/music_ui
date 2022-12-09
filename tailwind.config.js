/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'night':'#000000',
      'primary':'#610094',
      'secondary':'#3F0071',
      'dark':'#3F0071',
      'day':'#FFFFFF',
      
    },
    extend: {
      backgroundImage:{
        'boxPattern':'linear-gradient(144.39deg,#FFFFFF -278.56%,#6D6D6D -78.47%,#11101D 91.61%)',
        'buttonPattern':' linear-gradient(180deg, #610094 0%, rgba(63, 0, 113, 0.322917) 75.52%, rgba(21, 0, 80, 0) 100%)',
        'light2Pattern':'linear-gradient(90deg,#1A2980 0%,#26D0CE 100%)',
        'light3Pattern':'linear-gradient(180deg,rgba(188,165,255,0) 0%,#214D76 100%)',

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
