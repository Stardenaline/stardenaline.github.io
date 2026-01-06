import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#121212',
          dark: '#0a0a0a',
          card: '#1e1e1e',
          hover: '#2a2a2a',
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
        'float-glow-delayed': 'float-glow 10s ease-in-out infinite 2s',
        'pulse': 'pulse 2s infinite',
        'fade-in': 'fadeIn 1s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'float-glow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, 20px)' },
          '50%': { transform: 'translate(0, 40px)' },
          '75%': { transform: 'translate(-20px, 20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
