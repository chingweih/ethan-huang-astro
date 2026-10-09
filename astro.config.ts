// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  site: 'https://ethanhuang.me',
  integrations: [mdx(), sitemap(), svelte()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
