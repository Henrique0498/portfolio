import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    { pattern: /^bg-/ },
    { pattern: /^border-/ },
    { pattern: /^from-/ },
    { pattern: /^to-/ },
    { pattern: /^text-/ }
  ],
  theme: {},
  plugins: [nextui()]
}
export default config
