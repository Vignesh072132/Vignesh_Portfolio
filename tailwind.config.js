/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080808',
        surface: '#111111',
        border: '#1f1f1f',
        accent: '#6ee7b7',
        accent2: '#818cf8',
        muted: '#555555',
      },
    },
  },
  plugins: [],
}
