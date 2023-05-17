/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pigeon-40': '#D6DFE3',
        'dark-jungle': '#0A6343',
        'mint': '#E4F3E8',
      },
      fontFamily: {
        sans: [
          'Lato',
        ]
      },
    }
  },
  plugins: [],
}

