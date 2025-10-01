/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#00528a',
        'brand-primary-light': '#45afe3',
        'brand-secondary': '#feda2d',
        'brand-secondary-dark': '#f6e214',
        'brand-accent': '#26a19d',
        'brand-accent-light': '#7fbdad',
        'brand-light': '#bfe0be',
        'brand-neutral': '#bdcdd6',
        'brand-yellow': '#ffc818',
        'brand-yellow-light': '#f9e099',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ticker': 'ticker 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        ticker: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}