/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#F7F6F7',
        secondaryText: '#E7E0E8',
        primary: '#C7A8D2',
        primaryText: '#6D4575',
        accent: '#CBB6C3'
      },
      screens: {
        xs: '360px',
        ...defaultTheme.screens
      }
    }
  },
  plugins: []
}
