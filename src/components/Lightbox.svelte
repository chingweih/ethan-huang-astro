<script lang="ts">
  import PhotoSwipeLightbox from 'photoswipe/lightbox'
  import 'photoswipe/style.css'
  import type { Snippet } from 'svelte'

  let { class: className, children }: { class?: string; children: Snippet } =
    $props()
</script>

<div
  class={className}
  {@attach (gallery) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()
    return () => lightbox.destroy()
  }}
>
  {@render children()}
</div>
