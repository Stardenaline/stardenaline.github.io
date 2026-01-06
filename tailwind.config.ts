/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#121212',
          darker: '#0a0a0a',
          card: '#1e1e1e',
          'card-hover': '#2a2a2a',
        },
        accent: {
          DEFAULT: '#00ffff',
          dark: '#008b8b',
          hover: '#00cccc',
        },
        text: {
          primary: '#e0e0e0',
          secondary: '#a0a0a0',
        },
        yellow: '#ffff00',
        pink: '#ff5e9a',
        blue: '#29abe2',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-glow': 'float-glow 8s ease-in-out infinite',
        'pulse': 'pulse 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-glow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, 20px)' },
          '50%': { transform: 'translate(0, 40px)' },
          '75%': { transform: 'translate(-20px, 20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
