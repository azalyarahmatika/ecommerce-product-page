/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'pale_orange': 'hsl(25, 100%, 94%)',
        'very_dark_blue': 'hsl(220, 13%, 13%)',
        'dark_grayish_blue': 'hsl(219, 9%, 45%)',
        'grayish_blue': 'hsl(220, 14%, 75%)',
        'light_grayish_blue': 'hsl(223, 64%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        'kumbh_sans': 'Kumbh Sans'
      }
    },
  },
  plugins: [],
}

