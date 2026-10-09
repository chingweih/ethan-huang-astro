<script lang="ts">
  import type { Snippet } from 'svelte'
  import { lightbox } from '../lib/lightbox'

  let {
    class: className,
    items,
    children,
  }: { class?: string; items: string; children: Snippet } = $props()
</script>

<div class={className} {@attach lightbox(items)}>
  {@render children()}
</div>
