/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mega: {
          dark: '#0f1b35',
          navy: '#1a2847',
          blue: '#2a3f5f',
          light: '#3d5a7f',
          glow: '#4a6fa0',
        },
        accent: {
          cyan: '#00d4ff',
          white: '#ffffff',
          gray: '#f0f4f8',
          light: '#e8ecf1',
        },
        tech: {
          primary: '#00d4ff',
          secondary: '#0099cc',
          dark: '#003d66',
        }
      },
      backgroundImage: {
        'mega-gradient': 'radial-gradient(circle at center, rgba(74, 111, 160, 0.3) 0%, rgba(26, 40, 71, 0.8) 50%, rgba(15, 27, 53, 1) 100%)',
        'mega-radial': 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
        'tech-glow': 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(15, 27, 53, 0.95) 0%, rgba(26, 40, 71, 0.9) 50%, rgba(42, 63, 95, 0.85) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.1)',
          },
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-down': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'cosmic': '0 0 40px rgba(124, 58, 237, 0.3)',
        'cosmic-lg': '0 0 60px rgba(124, 58, 237, 0.4)',
        'glow': '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)',
        'glow-lg': '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.4)',
        'tech-glow': '0 0 25px rgba(0, 212, 255, 0.4), 0 0 50px rgba(0, 212, 255, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
