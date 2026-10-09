<script lang="ts">
  import EmblaCarousel from 'embla-carousel'
  import AutoScroll from 'embla-carousel-auto-scroll'
  import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
  import type { Snippet } from 'svelte'
  import { lightbox } from '../lib/lightbox'

  let { children }: { children: Snippet } = $props()
</script>

<div
  class="cursor-grab overflow-hidden active:cursor-grabbing"
  {@attach lightbox('[data-pswp-src]')}
  {@attach (viewport) => {
    const embla = EmblaCarousel(viewport, { dragFree: true, slides: 'img' }, [
      AutoScroll({
        speed: 0.5,
        playOnInit: !matchMedia('(prefers-reduced-motion: reduce)').matches,
      }),
      WheelGesturesPlugin(),
    ])
    return () => embla.destroy()
  }}
>
  <div class="flex gap-2.5">
    {@render children()}
  </div>
</div>
