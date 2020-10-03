const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#5E2CA5',
        'accent-2': '#EAEAEA',
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
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderColor: 'black'
    },
    variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
    },
    typography: {
      default: {
        css: {
          color: defaultTheme.colors.gray[900],
        }, // customizations to typography styles go here
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
