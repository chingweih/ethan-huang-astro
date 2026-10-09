export const cv: {
  title: string
  text?: string
  items: { name: string; detail?: string; date?: string }[]
}[] = [
  {
    title: 'About',
    text: 'I’m a data engineer and data journalist who turns public records into maps, trackers and charts people can read.',
    items: [
      {
        name: 'Email: e@ethanhuang.me | Github: @chingweih | Website: https://ethanhuang.me',
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
        date: '2025 Dec — 2026 June',
      },
      {
        name: 'Radio Taiwan International 中央廣播電台',
        detail: 'English Program & Web Service Team Intern',
        date: '2022 July — Aug',
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
        name: 'Full-stack | Typescript with React, Expo.js, Next.js, Hono.js',
        detail: 'Shipped full-stack PWA and native app bundle',
      },
      {
        name: 'Interactive | Svelte.js with Web Components',
        detail: 'Embedded interactive graphics inside news articles',
      },
      {
        name: 'Data & Infra | Python with FastAPI, BigQuery, QGIS',
        detail: 'Building crawler databases and data analysis',
      },
    ],
  },
]
