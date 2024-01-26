/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#84a182',
        'title': '#182e16',
      },
      fontFamily: {
        sans: ['Dancing Script', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
      },
    }
  },
  plugins: []
}

