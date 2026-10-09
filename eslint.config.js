import eslintParserTypeScript from '@typescript-eslint/parser'
import * as eslintParserAstro from 'astro-eslint-parser'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { defineConfig, globalIgnores } from 'eslint/config'
import * as eslintParserSvelte from 'svelte-eslint-parser'

export default defineConfig([
  globalIgnores(['dist', '.astro']),
  {
    files: ['**/*.{astro,svelte,ts}'],
    extends: [eslintPluginBetterTailwindcss.configs.recommended],
    settings: {
      'better-tailwindcss': { entryPoint: 'src/styles/global.css' },
    },
    rules: {
      // Prettier owns formatting and collapses wrapped class attributes
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/no-unknown-classes': [
        'error',
        { ignore: ['^not-prose$'] },
      ],
      'better-tailwindcss/no-restricted-classes': [
        'error',
        {
          restrict: [
            {
              pattern: '\\[([^\\[\\]]*?)\\](?!:)',
              message: 'Use a theme token instead of an arbitrary value.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintParserAstro,
      parserOptions: {
        parser: eslintParserTypeScript,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: eslintParserSvelte,
      parserOptions: { parser: eslintParserTypeScript },
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: { parser: eslintParserTypeScript },
  },
])
