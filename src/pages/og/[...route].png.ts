import type { APIRoute, InferGetStaticPropsType } from 'astro'
import { getCollection } from 'astro:content'
import { readdir, readFile } from 'node:fs/promises'
import satori, { type Font } from 'satori'
import sharp from 'sharp'

type Props = InferGetStaticPropsType<typeof getStaticPaths>

const span = (fontWeight: number, children: string) => ({
  type: 'span',
  props: { style: { fontWeight }, children },
})

const HOME = [
  'Hi, I’m ',
  span(700, 'Ethan Huang'),
  '. Data engineer, sometime journalist, making cool maps and moving charts.',
]

export async function getStaticPaths() {
  const notes = await getCollection('notes')
  return [
    { params: { route: 'index' }, props: { text: HOME, fontSize: 24 } },
    { params: { route: 'cv' }, props: { text: HOME, fontSize: 24 } },
    {
      params: { route: 'projects' },
      props: {
        text: 'behind the stories, things I helped create.',
        fontSize: 64,
      },
    },
    {
      params: { route: 'notes' },
      props: { text: 'stuff I wrote, mostly technical notes.', fontSize: 64 },
    },
    {
      params: { route: 'snapshots' },
      props: { text: 'Ethan’s Album', fontSize: 64 },
    },
    ...notes.map((note) => ({
      params: { route: `notes/${note.id}` },
      props: { text: note.data.title, fontSize: 40 },
    })),
  ]
}

const FONTS = 'node_modules/@fontsource'
const font = (file: string) => readFile(`${FONTS}/${file}`)

const fonts: Font[] = [
  {
    name: 'Inter',
    weight: 400,
    data: await font('inter/files/inter-latin-400-normal.woff'),
  },
  {
    name: 'Inter',
    weight: 500,
    data: await font('inter/files/inter-latin-500-normal.woff'),
  },
  {
    name: 'Inter',
    weight: 700,
    data: await font('inter/files/inter-latin-700-normal.woff'),
  },
  {
    name: 'Pixelify Sans',
    weight: 400,
    data: await font('pixelify-sans/files/pixelify-sans-latin-400-normal.woff'),
  },
  // Fontsource splits CJK fonts into unicode-range subsets. Satori keeps one font per name
  // and searches fonts outside `fontFamily` for missing glyphs, so each subset gets a unique name.
  ...(await Promise.all(
    (await readdir(`${FONTS}/noto-sans-tc/files`))
      .filter((file) => file.endsWith('-400-normal.woff'))
      .map(async (file) => ({
        name: file,
        weight: 400 as const,
        data: await font(`noto-sans-tc/files/${file}`),
      })),
  )),
]

export const GET: APIRoute<Props> = async ({ props }) => {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 45,
          width: '100%',
          height: '100%',
          padding: '150px 240px',
          backgroundColor: '#f1f1f1',
          color: '#333333',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'Pixelify Sans',
                fontSize: 16,
                color: 'black',
              },
              children: [
                {
                  type: 'svg',
                  props: {
                    width: 20,
                    height: 20,
                    viewBox: '0 0 20 20',
                    children: [
                      {
                        type: 'rect',
                        props: {
                          width: 20,
                          height: 20,
                          rx: 2,
                          fill: '#394a62',
                        },
                      },
                      {
                        type: 'rect',
                        props: {
                          x: 10,
                          y: 3,
                          width: 2,
                          height: 4,
                          rx: 1,
                          fill: 'white',
                        },
                      },
                      {
                        type: 'rect',
                        props: {
                          x: 14,
                          y: 4,
                          width: 2,
                          height: 4,
                          rx: 1,
                          fill: 'white',
                        },
                      },
                    ],
                  },
                },
                'ethan huang',
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'block', fontSize: props.fontSize },
              children: props.text,
            },
          },
        ],
      },
    },
    { width: 1200, height: 630, fonts },
  )
  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  })
}
