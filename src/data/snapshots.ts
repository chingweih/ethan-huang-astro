import type { ImageMetadata } from 'astro'
import exifr from 'exifr'

const images = import.meta.glob<ImageMetadata>(
  '/src/assets/snapshots/*.{avif,jpeg,jpg,png,webp}',
  { eager: true, import: 'default' },
)

const shutter = (seconds: number) =>
  seconds >= 1 ? `${seconds}s` : `1/${Math.round(1 / seconds)}s`

export const snapshots = (
  await Promise.all(
    Object.entries(images).map(async ([path, image]) => {
      const exif = await exifr.parse(`.${path}`, {
        pick: [
          'DateTimeOriginal',
          'ImageDescription',
          'Make',
          'Model',
          'FNumber',
          'ISO',
          'ExposureTime',
        ],
      })
      const date: Date | undefined = exif?.DateTimeOriginal
      const camera = exif?.Model?.startsWith(exif.Make)
        ? exif.Model
        : [exif?.Make, exif?.Model].filter(Boolean).join(' ')
      return {
        image,
        date,
        caption: [exif?.ImageDescription, date?.getFullYear()]
          .filter(Boolean)
          .join(', '),
        settings: [
          camera,
          exif?.FNumber && `ƒ/${exif.FNumber}`,
          exif?.ExposureTime && shutter(exif.ExposureTime),
          exif?.ISO && `ISO ${exif.ISO}`,
        ].filter(Boolean),
      }
    }),
  )
).sort((a, b) => (b.date?.valueOf() ?? 0) - (a.date?.valueOf() ?? 0))
