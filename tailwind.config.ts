import defaultTheme from 'tailwindcss/defaultTheme'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Rubik Variable',
          'Noto Sans TC Variable',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ['Noto Serif TC Variable', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        bg: '#fafafa',
      },
    },
  },
  plugins: [],
} satisfies Config
