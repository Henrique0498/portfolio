import { css } from 'styled-components'

export const theme = {
  colors: {
    text: '#111213',
    black: '#000',
    white: '#fff',
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      1000: '#080F1C'
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d'
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12'
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843'
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d'
    },
    violet: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95'
    }
  },
  text: {
    heading: {
      6: css`
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.75rem;
        font-family: 'Poppins', sans-serif;
      `,
      subtitle: css`
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.5rem;
        font-family: 'Poppins', sans-serif;
      `
    },
    body: {
      xxs: css`
        font-size: 0.625rem;
        line-height: 0.75rem;
        text-transform: uppercase;
      `,
      sm: css`
        font-size: 0.75rem;
        line-height: 1rem;
      `
    }
  },
  shadows: {
    md: '2px 2px 2px 0px rgba(0, 0, 0, 0.1), 2px 2px 2px 1px rgba(0, 0, 0, 0.1), 2px 2px 0px 0px rgba(0, 0, 0, 0.02)'
  }
}
