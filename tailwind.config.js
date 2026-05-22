/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ncwala-red': '#8B1A1A',
        'ncwala-black': '#0A0A0A',
        'ncwala-gold': '#A57B0A',
        'ncwala-white': '#FAFAFA',
      },
      fontFamily: {
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'garamond': ['EB Garamond', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'zoom-in': 'zoomIn 3s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

