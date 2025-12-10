/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6C00',
      },
      animation: {
        'glowPulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 30px 5px rgba(255, 108, 0, 0.4)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 55px 10px rgba(255, 108, 0, 0.8)',
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