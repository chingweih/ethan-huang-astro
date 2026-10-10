import { z } from 'astro/zod'

export const cvSchema = z.object({
  title: z.string(),
  text: z.string().optional(),
  items: z.array(
    z.object({
      name: z.string(),
      detail: z.string().optional(),
      date: z.string().optional(),
    }),
  ),
})

export const cv: z.input<typeof cvSchema>[] = [
  {
    title: 'About',
    text: 'I’m a data engineer and data journalist who turns public records into maps, trackers and charts people can read.',
    items: [
      {
        name: 'Email: e@ethanhuang.me | GitHub: @chingweih | Website: https://ethanhuang.me',
      },
    ],
  },
  {
    title: 'Work Experience',
    items: [
      {
        name: 'The Reporter 報導者',
        detail: 'Data Engineer / Data Journalist',
        date: '2025 — present',
      },
      {
        name: 'Forward Alliance 壯闊台灣',
        detail: 'Full-stack Engineer / Research & Development',
        date: '2022 — 2026',
      },
      {
        name: 'National Chengchi University 國立政治大學',
        detail: 'Research Assistant',
        date: 'Dec 2025 — June 2026',
      },
      {
        name: 'Radio Taiwan International 中央廣播電台',
        detail: 'English Program & Web Service Team Intern',
        date: 'July — Aug 2022',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        name: 'National Taiwan University 國立台灣大學',
        detail: 'B.A., Political Science',
        date: 'Class of 2026',
      },
    ],
  },
  {
    title: 'Skills',
    items: [
      {
        name: 'Full-stack | TypeScript with React, Expo, Next.js, Hono',
        detail: 'Shipped a full-stack PWA and native app bundles',
      },
      {
        name: 'Interactive | Svelte with Web Components',
        detail: 'Embedded interactive graphics inside news articles',
      },
      {
        name: 'Data & Infra | Python with FastAPI, BigQuery, QGIS',
        detail: 'Built crawlers, databases, and analysis pipelines',
      },
    ],
  },
]
