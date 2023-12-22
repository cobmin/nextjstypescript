/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'light-primary': '#F0F4F8',
        'light-secondary': '#D9EAD3',
        'light-text': '#1D1D1D',
        'light-accent': '#82B366',
        'dark-primary': '#1E1E1E',
        'dark-secondary': '#2F4F2F',
        'dark-text': '#E0E0E0',
        'dark-accent': '#67A86B',
        'link': '#60A5FA',
        'link-hover': '#93C5FD',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
