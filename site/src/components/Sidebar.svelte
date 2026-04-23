<script lang="ts">
  import layerMeta from "../data/layer-meta.json";

  type Props = { pathname?: string };
  let { pathname = "" }: Props = $props();

  let layersOpen = $state(pathname.startsWith("/layers"));
  let proposalsOpen = $state(pathname.startsWith("/proposals"));

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }
</script>

<nav aria-label="Primary" class="sidebar">
  <a href="/" class="brand" aria-label="Home">
    <img src="/logo.webp" alt="" class="brand-mark" width="40" height="40" />
    <span class="brand-stack">
      <span class="brand-text">EcoHubs</span>
      <span class="brand-sub">Community · RCOS</span>
    </span>
  </a>

  <ul class="nav-list">
    <li>
      <a href="/" class="nav-link" class:active={isActive("/")}>Home</a>
    </li>

    <li>
      <button
        type="button"
        class="nav-link nav-group"
        aria-expanded={layersOpen}
        onclick={() => (layersOpen = !layersOpen)}
      >
        <span>RCOS Artifacts</span>
        <span class="chevron" class:open={layersOpen}>▸</span>
      </button>
      {#if layersOpen}
        <ul class="nav-sublist">
          <li>
            <a
              href="/layers"
              class="nav-sublink"
              class:active={pathname === "/layers"}>Overview</a
            >
          </li>
          {#each layerMeta as layer (layer.slug)}
            <li>
              <a
                href={`/layers/${layer.slug}`}
                class="nav-sublink"
                class:active={isActive(`/layers/${layer.slug}`)}
              >
                <span class="num">{layer.number}</span>
                {layer.title}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </li>

    <li>
      <button
        type="button"
        class="nav-link nav-group"
        aria-expanded={proposalsOpen}
        onclick={() => (proposalsOpen = !proposalsOpen)}
      >
        <span>Proposals</span>
        <span class="chevron" class:open={proposalsOpen}>▸</span>
      </button>
      {#if proposalsOpen}
        <ul class="nav-sublist">
          <li>
            <a
              href="/proposals/passed"
              class="nav-sublink"
              class:active={isActive("/proposals/passed")}>Passed</a
            >
          </li>
          <li>
            <a
              href="/proposals/rejected"
              class="nav-sublink"
              class:active={isActive("/proposals/rejected")}>Rejected</a
            >
          </li>
          <li>
            <a
              href="/proposals/future"
              class="nav-sublink"
              class:active={isActive("/proposals/future")}>Future</a
            >
          </li>
        </ul>
      {/if}
    </li>

    <li>
      <a
        href="/compliance"
        class="nav-link"
        class:active={isActive("/compliance")}>Compliance</a
      >
    </li>

    <li>
      <a href="/#faq" class="nav-link">FAQ</a>
    </li>
  </ul>

  <div class="sidebar-footer">
    <a href="https://blueprint.ecohubs.community" target="_blank" rel="noopener"
      >RCOS framework ↗</a
    >
  </div>
</nav>

<style>
  .sidebar {
    position: sticky;
    top: 0;
    height: 100dvh;
    width: var(--sidebar-width);
    flex-shrink: 0;
    padding: 1.25rem 1rem;
    border-right: 1px solid var(--color-border);
    background: var(--color-surface);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: var(--color-text);
    text-decoration: none;
    padding: 0.25rem 0.5rem;
  }
  .brand-mark {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: contain;
    flex-shrink: 0;
  }
  .brand-stack {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }
  .brand-text {
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
  }
  .brand-sub {
    font-size: 0.72rem;
    color: var(--color-text-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-top: 0.15rem;
  }

  .nav-list,
  .nav-sublist {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    flex: 1;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: var(--radius-sm);
    color: var(--color-text);
    text-decoration: none;
    font-size: 0.92rem;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
  }
  .nav-link:hover {
    background: var(--color-surface-muted);
    color: var(--color-text);
  }
  .nav-link.active {
    background: var(--color-surface-muted);
    color: var(--color-primary);
    font-weight: 600;
  }

  .chevron {
    transition: transform 150ms ease;
    font-size: 1.5rem;
    color: var(--color-text-muted);
    line-height: 19px;
  }
  .chevron.open {
    transform: rotate(90deg);
  }

  .nav-sublist {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    margin: 0.15rem 0 0.25rem 0.4rem;
    padding-left: 0.5rem;
    border-left: 1px solid var(--color-border);
  }

  .nav-sublink {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.6rem;
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: 0.88rem;
  }
  .nav-sublink:hover {
    background: var(--color-surface-muted);
    color: var(--color-text);
  }
  .nav-sublink.active {
    color: var(--color-primary);
    font-weight: 600;
  }
  .num {
    display: inline-block;
    width: 1.1rem;
    font-variant-numeric: tabular-nums;
    color: var(--color-text-muted);
    font-size: 0.78rem;
  }

  .sidebar-footer {
    font-size: 0.82rem;
    padding: 0.5rem 0.6rem;
    border-top: 1px solid var(--color-border);
    padding-top: 0.75rem;
  }
  .sidebar-footer a {
    color: var(--color-text-muted);
    text-decoration: none;
  }
  .sidebar-footer a:hover {
    color: var(--color-primary);
  }
</style>
