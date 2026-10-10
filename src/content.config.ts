import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import exifr from 'exifr'
import fs from 'node:fs/promises'
import path from 'node:path'
import { cv, cvSchema } from '../collections/cv'
import { projects, projectSchema } from '../collections/projects'

const IMAGES = '*.{avif,jpeg,jpg,png,webp}'

const exif = z
  .object({
    DateTimeOriginal: z.date(),
    ImageDescription: z.string(),
    Make: z.string(),
    Model: z.string(),
    FNumber: z.number(),
    ISO: z.number(),
    ExposureTime: z.number(),
  })
  .partial()

const shutter = (seconds: number) =>
  seconds >= 1 ? `${seconds}s` : `1/${Math.round(1 / seconds)}s`

export const collections = {
  notes: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './collections/notes' }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
    }),
  }),

  cv: defineCollection({
    loader: () =>
      cv.map((section, order) => ({ id: section.title, order, ...section })),
    schema: cvSchema.extend({ order: z.number() }),
  }),

  projects: defineCollection({
    loader: () =>
      Promise.all(
        projects.map(async ({ imageFolder, ...project }, order) => ({
          id: imageFolder,
          order,
          ...project,
          images: (
            await Array.fromAsync(
              fs.glob(`collections/projects/${imageFolder}/${IMAGES}`),
            )
          )
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((file) => `/${file}`),
        })),
      ),
    schema: ({ image }) =>
      projectSchema
        .omit({ imageFolder: true })
        .extend({ order: z.number(), images: z.array(image()) }),
  }),

  snapshots: defineCollection({
    loader: async () =>
      Promise.all(
        (await Array.fromAsync(fs.glob(`collections/snapshots/${IMAGES}`))).map(
          async (file) => {
            const {
              DateTimeOriginal: date,
              ImageDescription,
              Make,
              Model,
              FNumber,
              ISO,
              ExposureTime,
            } = exif.parse(
              (await exifr.parse(file, { pick: exif.keyof().options })) ?? {},
            )
            const camera =
              Make && Model?.startsWith(Make)
                ? Model
                : [Make, Model].filter(Boolean).join(' ')
            return {
              id: path.basename(file),
              image: `/${file}`,
              date,
              caption: [
                ImageDescription,
                date &&
                  `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
              ]
                .filter(Boolean)
                .join(', '),
              settings: [
                camera,
                FNumber && `ƒ/${FNumber}`,
                ExposureTime && shutter(ExposureTime),
                ISO && `ISO ${ISO}`,
              ].filter(Boolean),
            }
          },
        ),
      ),
    schema: ({ image }) =>
      z.object({
        image: image(),
        date: z.date().optional(),
        caption: z.string(),
        settings: z.array(z.string()),
      }),
  }),
}
