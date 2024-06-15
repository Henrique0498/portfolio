import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // ou 'media'
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {},
  plugins: []
}
export default config
