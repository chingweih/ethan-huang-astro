import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      ...defaultTheme,
      fontFamily: {
        sans: ['Noto Sans TC Variable', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif TC Variable', ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      ...colors,
      bg: '#fafafa',
    },
  },
  plugins: [],
}
