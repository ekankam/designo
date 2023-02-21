/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-peach': 'rgba(231, 129, 107, 1)',
        'light-peach': 'rgba(255, 173, 155, 1)',
        'primary-black': 'rgba(29, 28, 30, 1)',
        'dark-grey': 'rgba(51, 49, 54, 1)',
        'primary-white': 'rgba(255, 255, 255, 1)',
        'light-grey': 'rgba(223, 223, 223, 1)',
      },
      fontSize: {
        'text-48': ['48px', '48px'],
        'text-40': ['40px', '48px'],
        'text-20': ['20px', '26px'],
        'text-16': ['16px', '26px'],
      },
    },
  },
  plugins: [],
};
