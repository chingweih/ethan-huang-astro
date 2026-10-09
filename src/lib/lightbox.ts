import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import type { Attachment } from 'svelte/attachments'

export const lightbox =
  (selector: string): Attachment<HTMLElement> =>
  (gallery) => {
    const instance = new PhotoSwipeLightbox({
      gallery,
      // Items laid out in CSS columns keep their reading order in `order`
      children: [...gallery.querySelectorAll<HTMLElement>(selector)].sort(
        (a, b) => Number(a.style.order) - Number(b.style.order),
      ),
      pswpModule: () => import('photoswipe'),
    })
    // PhotoSwipe only reads data-pswp-* from <a>, our items are <img> or <div>
    instance.addFilter('domItemData', (itemData, element) => {
      const thumbnail =
        element instanceof HTMLImageElement
          ? element
          : element.querySelector('img')
      return {
        ...itemData,
        src: element.dataset.pswpSrc,
        width: Number(element.dataset.pswpWidth),
        height: Number(element.dataset.pswpHeight),
        msrc: thumbnail?.currentSrc,
        alt: thumbnail?.alt,
      }
    })
    instance.init()
    return () => instance.destroy()
  }
