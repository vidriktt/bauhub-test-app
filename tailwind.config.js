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
        'warning-yellow-10': '#FDF7E6',
        'error-red-10': '#FFEEEE',
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

