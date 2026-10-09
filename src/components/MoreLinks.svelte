<script lang="ts">
  import type { Snippet } from 'svelte'
  import { prefersReducedMotion } from 'svelte/motion'
  import { slide } from 'svelte/transition'

  let { children }: { children: Snippet } = $props()
  let open = $state(false)
</script>

<div class="flex flex-col">
  {#if open}
    <div
      class="flex flex-col gap-2.5 pb-2.5"
      transition:slide={{ duration: prefersReducedMotion.current ? 0 : 300 }}
    >
      {@render children()}
    </div>
  {/if}
  <button
    type="button"
    class="cursor-pointer self-start"
    aria-expanded={open}
    onclick={() => (open = !open)}
  >
    {open ? '－ Less' : '＋ More'}
  </button>
</div>
