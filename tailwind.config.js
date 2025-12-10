/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#F48FB1', // Updated to Pink
      },
      animation: {
        'glowPulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 30px 5px rgba(244, 143, 177, 0.4)', // Updated RGBA to match Pink
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 55px 10px rgba(244, 143, 177, 0.8)', // Updated RGBA to match Pink
            transform: 'scale(1.03)',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}