/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#06223a',
        mist: '#f5f9fb',
        'slate-650': '#526678',
      },
      fontFamily: {
        display: [
          'Inter Tight',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(6, 34, 58, 0.12)',
        line: '0 1px 0 rgba(6, 34, 58, 0.08)',
      },
    },
  },
  plugins: [],
}
