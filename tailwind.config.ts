import defaultTheme from 'tailwindcss/defaultTheme'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter Tight Variable',
          'Noto Sans TC Variable',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'PT Serif',
          'Noto Serif TC Variable',
          ...defaultTheme.fontFamily.serif,
        ],
        mono: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        bg: '#101010',
        primary: '#FFC799',
      },
    },
  },
  plugins: [],
} satisfies Config
