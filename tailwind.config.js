/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        // Light theme colors inspired by common design patterns
        'light-primary': '#FFFFFF', // White background
        'light-secondary': '#F6F8FA', // Light grey for secondary elements
        'light-text': '#24292E', // Dark grey text for contrast
        'light-accent': '#21a238',

        // Dark theme colors inspired by GitHub's dark mode
        'dark-primary': '#0D1117', // Very dark grey (almost black) background
        'dark-secondary': '#161B22', // Slightly lighter grey for secondary elements
        'dark-text': '#C9D1D9', // Light grey text for readability
        'dark-accent': '#21a238',

        // Additional colors
        'link': '#0366D6', // Standard link color
        'link-hover': '#58A6FF', // Link color on hover
        'link-cat': '#28a745', // Standard link color
        'link-cat-hover': '#34d058', // Link color on hover

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
