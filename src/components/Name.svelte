<script lang="ts">
  let expanded = $state(false)

  const toggle = () => (expanded = !expanded)
</script>

{#snippet reveal(text: string)}
  <span
    class={[
      'inline-block overflow-hidden align-bottom whitespace-nowrap transition-all duration-500 ease-out motion-reduce:transition-none',
      expanded ? 'max-w-40 opacity-100' : 'max-w-0 opacity-0',
    ]}
  >
    <span class="pl-1.5">{text}</span>
  </span>
{/snippet}

<!-- A <button> is always an atomic inline box, so it cannot wrap with the sentence -->
<span
  role="button"
  tabindex="0"
  class="cursor-pointer font-bold"
  aria-expanded={expanded}
  onclick={toggle}
  onkeydown={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
  }}
>
  Ethan{@render reveal('Ching-Wei')} Huang{@render reveal('黃靖緯')}
</span>
