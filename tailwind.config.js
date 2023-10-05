// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          small: '4px',
          medium: '8px',
          large: '12px'
        },
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.25rem'
        },
        lineHeight: {
          tiny: '1.25rem',
          small: '1.313rem',
          medium: '1.5rem',
          large: '1.75rem'
        }
      },
      themes: {
        light: {
          colors: {
            primary: '#3b82f6',
            secondary: '#8b5cf6',
            warning: '#f97316',
            success: '#22c55e',
            danger: '#ef4444',
            default: '#3b82f6'
          }
        }
      }
    })
  ]
}
