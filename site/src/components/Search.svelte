<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let isOpen = false;
  let query = '';
  let searchData = [];
  let results = [];
  let searchInput;

  async function toggleSearch() {
    isOpen = !isOpen;
    if (isOpen) {
      if (searchData.length === 0) {
        try {
          const res = await fetch('/api/search.json');
          searchData = await res.json();
        } catch (e) {
          console.error('Failed to load search index', e);
        }
      }
      setTimeout(() => searchInput?.focus(), 50);
    } else {
      query = '';
    }
  }

  $: {
    if (query.trim() === '') {
      results = [];
    } else {
      const q = query.toLowerCase();
      results = searchData.filter(item => 
        (item.title && item.title.toLowerCase().includes(q)) || 
        (item.body && item.body.toLowerCase().includes(q)) ||
        (item.summary && item.summary.toLowerCase().includes(q))
      ).slice(0, 10);
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Escape' && isOpen) {
      toggleSearch();
    }
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      toggleSearch();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div class="search-container">
  <button class="search-btn" on:click={toggleSearch} aria-label="Search">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <span class="shortcut">Ctrl K</span>
  </button>

  {#if isOpen}
    <div class="backdrop" on:click={toggleSearch} transition:fade={{ duration: 150 }}></div>
    <div class="modal" transition:fade={{ duration: 150 }}>
      <div class="modal-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          bind:this={searchInput}
          bind:value={query}
          placeholder="Search documentation..."
          type="text"
        />
        <button class="close-btn" on:click={toggleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="results">
        {#if query.trim() !== '' && results.length === 0}
          <div class="no-results">No results found for "{query}"</div>
        {/if}
        {#each results as result}
          <a href={result.url} class="result-item" on:click={toggleSearch}>
            <div class="result-title">
              <span class="type">{result.type}</span>
              {result.title}
            </div>
            {#if result.summary}
              <div class="result-summary">{result.summary}</div>
            {/if}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .search-container {
    position: absolute;
    top: 2rem;
    right: 2.5rem;
    z-index: 50;
  }
  
  .search-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 0.4rem 0.75rem;
    color: var(--color-text-muted);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .search-btn:hover {
    color: var(--color-text);
    border-color: var(--color-text-muted);
  }
  
  .shortcut {
    font-size: 0.75rem;
    background: var(--color-bg);
    padding: 0.1rem 0.3rem;
    border-radius: 4px;
    border: 1px solid var(--color-border);
  }
  
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    backdrop-filter: blur(2px);
  }
  
  .modal {
    position: fixed;
    top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
    z-index: 101;
    overflow: hidden;
  }
  
  .modal-header {
    display: flex;
    align-items: center;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--color-border);
    gap: 0.75rem;
    color: var(--color-text-muted);
  }
  
  .modal-header input {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--color-text);
    font-size: 1.1rem;
    outline: none;
  }
  
  .close-btn {
    background: transparent;
    border: none;
    color: var(--color-text-muted);
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .close-btn:hover {
    color: var(--color-text);
    background: var(--color-border);
  }
  
  .results {
    max-height: 60vh;
    overflow-y: auto;
  }
  
  .no-results {
    padding: 3rem 2rem;
    text-align: center;
    color: var(--color-text-muted);
  }
  
  .result-item {
    display: block;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--color-border);
    text-decoration: none;
    color: var(--color-text);
    transition: background 0.15s ease;
  }
  
  .result-item:last-child {
    border-bottom: none;
  }
  
  .result-item:hover {
    background: var(--color-bg);
  }
  
  .result-title {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .type {
    font-size: 0.65rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
    background: var(--color-border);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    color: var(--color-text-muted);
  }
  
  .result-summary {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    margin-top: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  @media (max-width: 768px) {
    .search-container {
      top: 1rem;
      right: 1.25rem;
    }
    .modal {
      top: 5vh;
      width: 95%;
      max-height: 90vh;
    }
    .shortcut {
      display: none;
    }
  }
</style>
