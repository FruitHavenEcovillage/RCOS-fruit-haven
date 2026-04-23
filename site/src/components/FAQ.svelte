<script lang="ts">
  type Item = { q: string; a: string };
  type Props = { items: Item[] };
  let { items }: Props = $props();

  let openIndex = $state<number | null>(null);

  function toggle(i: number) {
    openIndex = openIndex === i ? null : i;
  }
</script>

<ul class="faq">
  {#each items as item, i (item.q)}
    <li class="faq-item">
      <button
        type="button"
        class="faq-q"
        aria-expanded={openIndex === i}
        onclick={() => toggle(i)}
      >
        <span>{item.q}</span>
        <span class="faq-icon" class:open={openIndex === i}>+</span>
      </button>
      {#if openIndex === i}
        <div class="faq-a">{item.a}</div>
      {/if}
    </li>
  {/each}
</ul>

<style>
  .faq {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--color-border);
  }
  .faq-item {
    border-bottom: 1px solid var(--color-border);
  }
  .faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    padding: 1rem 0.25rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font: inherit;
    color: var(--color-text);
    text-align: left;
    font-weight: 500;
  }
  .faq-q:hover {
    color: var(--color-primary);
  }
  .faq-icon {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    transition: transform 150ms ease;
  }
  .faq-icon.open {
    transform: rotate(45deg);
  }
  .faq-a {
    padding: 0 0.25rem 1rem;
    color: var(--color-text-muted);
    line-height: 1.6;
  }
</style>
