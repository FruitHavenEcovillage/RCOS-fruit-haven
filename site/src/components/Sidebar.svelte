<script lang="ts">
  import layerMeta from "../data/layer-meta.json";
  import layerArtifacts from "../data/layer-artifacts.json";

  type Props = { pathname?: string };
  type LayerArtifact = { slug: string; title: string };
  const artifactsByLayer = layerArtifacts as Record<string, LayerArtifact[]>;
  let { pathname = "" }: Props = $props();

  let layersOpen = $state(pathname.startsWith("/layers"));
  let proposalsOpen = $state(pathname.startsWith("/proposals"));
  let openLayerArticles = $state<Record<string, boolean>>(
    Object.fromEntries(
      layerMeta.map((layer) => [
        layer.slug,
        pathname === `/layers/${layer.slug}` || pathname.startsWith(`/layers/${layer.slug}/`),
      ]),
    ),
  );

  let drawerOpen = $state(false);
  let isMobile = $state(false);
  let hamburgerEl: HTMLButtonElement | undefined = $state();
  let drawerEl: HTMLElement | undefined = $state();

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  function getLayerArtifacts(layerSlug: string): LayerArtifact[] {
    return artifactsByLayer[layerSlug] ?? [];
  }

  function layerArticlesOpen(layerSlug: string): boolean {
    return openLayerArticles[layerSlug] ?? false;
  }

  function toggleLayerArticles(layerSlug: string) {
    openLayerArticles = {
      ...openLayerArticles,
      [layerSlug]: !layerArticlesOpen(layerSlug),
    };
  }

  function openDrawer() {
    drawerOpen = true;
  }
  function closeDrawer() {
    drawerOpen = false;
  }

  function onLinkClick() {
    if (isMobile) closeDrawer();
  }

  $effect(() => {
    const mql = window.matchMedia("(max-width: 767.99px)");
    const update = () => {
      isMobile = mql.matches;
      if (!isMobile) drawerOpen = false;
    };
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  });

  $effect(() => {
    if (!isMobile) return;
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeDrawer();
          hamburgerEl?.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      const firstLink = drawerEl?.querySelector<HTMLElement>("a, button");
      firstLink?.focus();
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    } else {
      document.body.style.overflow = "";
    }
  });
</script>

<div class="mobile-bar">
  <a href="/" class="mobile-brand" aria-label="Home">
    <img src="/logo.png" alt="" width="32" height="32" />
    <span>Fruit Haven</span>
  </a>
  <button
    bind:this={hamburgerEl}
    type="button"
    class="hamburger"
    aria-expanded={drawerOpen}
    aria-controls="primary-nav"
    aria-label={drawerOpen ? "Close navigation" : "Open navigation"}
    onclick={() => (drawerOpen ? closeDrawer() : openDrawer())}
  >
    {#if drawerOpen}
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    {:else}
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    {/if}
  </button>
</div>

{#if drawerOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="backdrop" onclick={closeDrawer} aria-hidden="true"></div>
{/if}

<nav
  bind:this={drawerEl}
  id="primary-nav"
  aria-label="Primary"
  class="sidebar"
  class:drawer-open={drawerOpen}
  aria-hidden={isMobile && !drawerOpen}
>
  <a href="/" class="brand" aria-label="Home" onclick={onLinkClick}>
    <img src="/logo.png" alt="" class="brand-mark" width="40" height="40" />
    <span class="brand-stack">
      <span class="brand-text">Fruit Haven</span>
      <span class="brand-sub">Community · RCOS</span>
    </span>
  </a>

  <ul class="nav-list">
    <li>
      <button
        type="button"
        class="nav-link search-nav-btn"
        onclick={() => { window.dispatchEvent(new CustomEvent('open-search')); if(isMobile) closeDrawer(); }}
      >
        <span class="search-nav-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Search
        </span>
        <span class="search-nav-shortcut">Ctrl K</span>
      </button>
    </li>

    <li>
      <button
        type="button"
        class="nav-link ask-ai-btn"
        onclick={() => { window.dispatchEvent(new CustomEvent('open-ai-chat')); if(isMobile) closeDrawer(); }}
      >
        <span class="search-nav-content">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Ask AI
        </span>
      </button>
    </li>

    <li>
      <a
        href="/"
        class="nav-link"
        class:active={isActive("/")}
        onclick={onLinkClick}>Fruit Haven RCOS Home</a
      >
    </li>

    <li>
      <div class="layer-row">
        <a
          href="/layers"
          class="nav-link proposals-link"
          class:active={pathname === "/layers"}
          onclick={onLinkClick}
        >RCOS Artifacts</a>
        <button
          type="button"
          class="layer-toggle"
          aria-label={layersOpen ? "Hide RCOS Artifacts" : "Show RCOS Artifacts"}
          aria-expanded={layersOpen}
          onclick={() => (layersOpen = !layersOpen)}
        >
          <span class="chevron layer-chevron" class:open={layersOpen}>▸</span>
        </button>
      </div>
      {#if layersOpen}
        <ul class="nav-sublist">
          {#each layerMeta as layer (layer.slug)}
            <li>
              <div class="layer-row">
                <a
                  href={`/layers/${layer.slug}`}
                  class="nav-sublink layer-link"
                  class:active={isActive(`/layers/${layer.slug}`)}
                  onclick={onLinkClick}
                >
                  <span class="num">{layer.number}</span>
                  {layer.title}
                </a>
                {#if getLayerArtifacts(layer.slug).length > 0}
                  <button
                    type="button"
                    class="layer-toggle"
                    aria-label={`${layerArticlesOpen(layer.slug) ? "Hide" : "Show"} ${layer.title} articles`}
                    aria-expanded={layerArticlesOpen(layer.slug)}
                    onclick={() => toggleLayerArticles(layer.slug)}
                  >
                    <span
                      class="chevron layer-chevron"
                      class:open={layerArticlesOpen(layer.slug)}>▸</span
                    >
                  </button>
                {/if}
              </div>
              {#if getLayerArtifacts(layer.slug).length > 0}
                {#if layerArticlesOpen(layer.slug)}
                  <ul class="nav-artifact-list" aria-label={`${layer.title} artifacts`}>
                    {#each getLayerArtifacts(layer.slug) as artifact (artifact.slug)}
                      <li>
                        <a
                          href={`/layers/${layer.slug}/${artifact.slug}`}
                          class="nav-artifact-link"
                          class:active={pathname ===
                            `/layers/${layer.slug}/${artifact.slug}`}
                          onclick={onLinkClick}
                        >
                          {artifact.title}
                        </a>
                      </li>
                    {/each}
                  </ul>
                {/if}
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    </li>

    <li>
      <div class="layer-row">
        <a
          href="/proposals"
          class="nav-link proposals-link"
          class:active={isActive("/proposals")}
          onclick={onLinkClick}
        >Proposals</a>
        <button
          type="button"
          class="layer-toggle"
          aria-label={proposalsOpen ? "Hide proposal categories" : "Show proposal categories"}
          aria-expanded={proposalsOpen}
          onclick={() => (proposalsOpen = !proposalsOpen)}
        >
          <span class="chevron layer-chevron" class:open={proposalsOpen}>▸</span>
        </button>
      </div>
      {#if proposalsOpen}
        <ul class="nav-sublist">
          <li>
            <a
              href="/proposals/passed"
              class="nav-sublink"
              class:active={isActive("/proposals/passed")}
              onclick={onLinkClick}>Passed</a
            >
          </li>
          <li>
            <a
              href="/proposals/rejected"
              class="nav-sublink"
              class:active={isActive("/proposals/rejected")}
              onclick={onLinkClick}>Rejected</a
            >
          </li>
          <li>
            <a
              href="/proposals/future"
              class="nav-sublink"
              class:active={isActive("/proposals/future")}
              onclick={onLinkClick}>Future</a
            >
          </li>
        </ul>
      {/if}
    </li>

    <li>
      <a
        href="/compliance"
        class="nav-link"
        class:active={isActive("/compliance")}
        onclick={onLinkClick}>Compliance</a
      >
    </li>

    <li>
      <a
        href="/cms"
        class="nav-link"
        class:active={isActive("/cms") || isActive("/edit")}
        onclick={onLinkClick}>CMS Editor</a
      >
    </li>

    <li>
      <a href="/#faq" class="nav-link" onclick={onLinkClick}>FAQ</a>
    </li>
  </ul>

  <div class="sidebar-footer">
    <a href="https://fruithaven.land" target="_blank" rel="noopener">Fruit Haven homepage ↗</a>
    <a href="https://github.com/FruitHavenEcovillage/RCOS-fruit-haven" target="_blank" rel="noopener">View on GitHub ↗</a>
    <a href="https://blueprint.ecohubs.community" target="_blank" rel="noopener"
      >RCOS framework ↗</a
    >
  </div>
</nav>

<style>
  .mobile-bar {
    display: none;
  }

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
  .nav-sublist,
  .nav-artifact-list {
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
  
  .search-nav-btn {
    margin-bottom: 0.5rem;
    color: var(--color-text-muted);
    border: 1px solid var(--color-border);
  }
  .search-nav-btn:hover {
    border-color: var(--color-text-muted);
  }

  .ask-ai-btn {
    margin-bottom: 0.5rem;
    color: var(--color-primary);
    border: 1px solid color-mix(in srgb, var(--color-primary) 40%, transparent);
    background: color-mix(in srgb, var(--color-primary) 8%, transparent);
  }
  .ask-ai-btn:hover {
    background: color-mix(in srgb, var(--color-primary) 15%, transparent);
    border-color: var(--color-primary);
  }
  .search-nav-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .search-nav-shortcut {
    font-size: 0.7rem;
    background: var(--color-bg);
    padding: 0.1rem 0.3rem;
    border-radius: 4px;
    border: 1px solid var(--color-border);
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

  .layer-row {
    display: flex;
    align-items: center;
    gap: 0.15rem;
  }

  .layer-link,
  .proposals-link {
    flex: 1;
    min-width: 0;
  }

  .layer-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.7rem;
    height: 1.7rem;
    padding: 0;
    border: none;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--color-text-muted);
    cursor: pointer;
    flex-shrink: 0;
  }
  .layer-toggle:hover {
    background: var(--color-surface-muted);
    color: var(--color-text);
  }
  .layer-chevron {
    font-size: 1.1rem;
  }

  .nav-artifact-list {
    display: flex;
    flex-direction: column;
    gap: 0.05rem;
    margin: 0 0 0.3rem 1.6rem;
    padding-left: 0.55rem;
    border-left: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
  }

  .nav-artifact-link {
    display: block;
    padding: 0.22rem 0.45rem;
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: 0.78rem;
    line-height: 1.25;
  }
  .nav-artifact-link:hover {
    background: var(--color-surface-muted);
    color: var(--color-text);
  }
  .nav-artifact-link.active {
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
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .sidebar-footer a {
    color: var(--color-text-muted);
    text-decoration: none;
  }
  .sidebar-footer a:hover {
    color: var(--color-primary);
  }

  @media (max-width: 767.99px) {
    .mobile-bar {
      position: sticky;
      top: 0;
      z-index: 30;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.6rem 0.9rem;
      background: var(--color-surface);
      border-bottom: 1px solid var(--color-border);
    }
    .mobile-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-text);
      text-decoration: none;
      font-family: var(--font-serif);
      font-weight: 700;
      font-size: 1.05rem;
    }
    .mobile-brand img {
      width: 1.8rem;
      height: 1.8rem;
      object-fit: contain;
    }
    .hamburger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      background: transparent;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      color: var(--color-text);
      cursor: pointer;
    }
    .hamburger:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: rgb(0 0 0 / 40%);
      z-index: 40;
    }

    .sidebar {
      position: fixed;
      inset: 0 auto 0 0;
      height: 100dvh;
      width: min(85vw, 20rem);
      z-index: 50;
      transform: translateX(-100%);
      transition: transform 200ms ease;
      border-right: 1px solid var(--color-border);
      box-shadow: 0 0 0 transparent;
    }
    .sidebar.drawer-open {
      transform: translateX(0);
      box-shadow: 0 20px 40px -10px rgb(0 0 0 / 30%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sidebar {
      transition: none;
    }
  }
</style>
