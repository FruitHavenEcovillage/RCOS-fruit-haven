<script lang="ts">
  type Message = { role: 'user' | 'assistant'; content: string };

  let open = $state(false);
  let input = $state('');
  let loading = $state(false);
  let messages = $state<Message[]>([]);
  let messagesEl: HTMLElement | undefined = $state();
  let inputEl: HTMLTextAreaElement | undefined = $state();

  function toggle() {
    open = !open;
    if (open) {
      setTimeout(() => inputEl?.focus(), 50);
    }
  }

  $effect(() => {
    const handler = () => {
      open = true;
      setTimeout(() => inputEl?.focus(), 50);
    };
    window.addEventListener('open-ai-chat', handler);
    return () => window.removeEventListener('open-ai-chat', handler);
  });

  $effect(() => {
    if (messagesEl && messages.length) {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  });

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    input = '';
    messages = [...messages, { role: 'user', content: text }];
    loading = true;

    const history = messages.slice(0, -1);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Request failed' }));
        messages = [...messages, { role: 'assistant', content: `Error: ${err.error ?? 'Something went wrong.'}` }];
        return;
      }

      messages = [...messages, { role: 'assistant', content: '' }];
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        messages = messages.map((m, i) =>
          i === messages.length - 1 ? { ...m, content: m.content + chunk } : m,
        );
      }
    } catch (e) {
      messages = [...messages, { role: 'assistant', content: 'Network error. Please try again.' }];
    } finally {
      loading = false;
      setTimeout(() => inputEl?.focus(), 50);
    }
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
    if (e.key === 'Escape') {
      open = false;
    }
  }

  function renderMarkdown(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="chat-link">$1</a>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }
</script>

<!-- Floating trigger button -->
<button
  type="button"
  class="chat-fab"
  aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
  onclick={toggle}
  title="Ask AI about Fruit Haven"
>
  {#if open}
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M9.5 9h.01M12.5 9h.01M15.5 9h.01" stroke-width="2.5" />
    </svg>
  {/if}
</button>

<!-- Chat panel -->
{#if open}
  <div class="chat-panel" role="dialog" aria-label="AI assistant" aria-modal="true">
    <div class="chat-header">
      <div class="chat-header-info">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span class="chat-title">Ask about Fruit Haven</span>
      </div>
      <button type="button" class="chat-close" onclick={toggle} aria-label="Close">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <div class="chat-messages" bind:this={messagesEl}>
      {#if messages.length === 0}
        <div class="chat-empty">
          <p>Hi! I can help you understand Fruit Haven's governance structure, layers, proposals, and bylaws. What would you like to know?</p>
          <div class="chat-suggestions">
            {#each ['What are the governance layers?', 'What proposals have passed?', 'How does the community make decisions?'] as suggestion}
              <button
                type="button"
                class="chat-suggestion"
                onclick={() => { input = suggestion; send(); }}
              >{suggestion}</button>
            {/each}
          </div>
        </div>
      {:else}
        {#each messages as msg}
          <div class="chat-msg" class:user={msg.role === 'user'} class:assistant={msg.role === 'assistant'}>
            {#if msg.role === 'assistant'}
              <div class="msg-bubble assistant-bubble">
                {#if msg.content}
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  {@html renderMarkdown(msg.content)}
                {:else}
                  <span class="typing-dots"><span></span><span></span><span></span></span>
                {/if}
              </div>
            {:else}
              <div class="msg-bubble user-bubble">{msg.content}</div>
            {/if}
          </div>
        {/each}
      {/if}
    </div>

    <div class="chat-input-area">
      <textarea
        bind:this={inputEl}
        bind:value={input}
        onkeydown={onKeydown}
        placeholder="Ask a question…"
        rows={1}
        class="chat-input"
        disabled={loading}
        aria-label="Your message"
      ></textarea>
      <button
        type="button"
        class="chat-send"
        onclick={send}
        disabled={loading || !input.trim()}
        aria-label="Send"
      >
        {#if loading}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" class="spin">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        {:else}
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        {/if}
      </button>
    </div>
    <p class="chat-footer">Powered by Claude · Answers may be imperfect</p>
  </div>
{/if}

<style>
  .chat-fab {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 100;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    background: var(--color-primary);
    color: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 14px rgb(0 0 0 / 0.25);
    transition: background 150ms ease, transform 150ms ease, box-shadow 150ms ease;
  }
  .chat-fab:hover {
    background: var(--color-primary-hover);
    transform: scale(1.06);
    box-shadow: 0 6px 20px rgb(0 0 0 / 0.3);
  }

  .chat-panel {
    position: fixed;
    bottom: 5.5rem;
    right: 1.5rem;
    z-index: 99;
    width: min(26rem, calc(100vw - 2rem));
    max-height: min(36rem, calc(100dvh - 7rem));
    display: flex;
    flex-direction: column;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg), 0 0 0 1px rgb(0 0 0 / 0.04);
    overflow: hidden;
    animation: slideUp 180ms ease;
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(0.5rem) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.85rem 1rem;
    background: var(--color-primary);
    color: #fff;
    flex-shrink: 0;
  }
  .chat-header-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .chat-title {
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 0.95rem;
  }
  .chat-close {
    background: transparent;
    border: none;
    color: rgba(255 255 255 / 0.85);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: var(--radius-sm);
    padding: 0;
  }
  .chat-close:hover {
    background: rgba(255 255 255 / 0.15);
    color: #fff;
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    scroll-behavior: smooth;
  }

  .chat-empty {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .chat-empty p {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    line-height: 1.5;
  }
  .chat-suggestions {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .chat-suggestion {
    background: var(--color-surface-muted);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text);
    cursor: pointer;
    font-size: 0.82rem;
    padding: 0.45rem 0.7rem;
    text-align: left;
    font-family: inherit;
    transition: background 120ms;
  }
  .chat-suggestion:hover {
    background: var(--color-border);
  }

  .chat-msg {
    display: flex;
  }
  .chat-msg.user {
    justify-content: flex-end;
  }
  .chat-msg.assistant {
    justify-content: flex-start;
  }

  .msg-bubble {
    max-width: 88%;
    font-size: 0.88rem;
    line-height: 1.55;
    border-radius: var(--radius);
    padding: 0.55rem 0.85rem;
    word-break: break-word;
  }
  .user-bubble {
    background: var(--color-primary);
    color: #fff;
    border-bottom-right-radius: var(--radius-sm);
  }
  .assistant-bubble {
    background: var(--color-surface-muted);
    color: var(--color-text);
    border-bottom-left-radius: var(--radius-sm);
  }
  :global(.chat-link) {
    color: var(--color-primary);
    text-decoration: underline;
  }
  :global(.assistant-bubble code) {
    background: var(--color-border);
    padding: 0.1em 0.3em;
    border-radius: 3px;
    font-size: 0.85em;
    font-family: var(--font-mono);
  }

  .typing-dots {
    display: inline-flex;
    gap: 0.25rem;
    align-items: center;
    height: 1rem;
  }
  .typing-dots span {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: var(--color-text-muted);
    animation: dot-bounce 1.2s ease-in-out infinite;
  }
  .typing-dots span:nth-child(2) { animation-delay: 0.15s; }
  .typing-dots span:nth-child(3) { animation-delay: 0.3s; }
  @keyframes dot-bounce {
    0%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-4px); }
  }

  .chat-input-area {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    padding: 0.75rem 0.85rem;
    border-top: 1px solid var(--color-border);
    flex-shrink: 0;
  }
  .chat-input {
    flex: 1;
    resize: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-bg);
    color: var(--color-text);
    font-family: inherit;
    font-size: 0.88rem;
    line-height: 1.5;
    padding: 0.45rem 0.65rem;
    max-height: 8rem;
    overflow-y: auto;
    outline: none;
  }
  .chat-input:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 20%, transparent);
  }
  .chat-input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .chat-send {
    flex-shrink: 0;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--radius-sm);
    background: var(--color-primary);
    color: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 120ms;
  }
  .chat-send:hover:not(:disabled) {
    background: var(--color-primary-hover);
  }
  .chat-send:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .spin {
    animation: spin 0.9s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .chat-footer {
    font-size: 0.68rem;
    color: var(--color-text-tertiary);
    text-align: center;
    padding: 0.35rem 0.5rem 0.5rem;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    .chat-panel {
      right: 0.75rem;
      bottom: 5rem;
      width: calc(100vw - 1.5rem);
    }
    .chat-fab {
      right: 0.75rem;
      bottom: 1rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .chat-panel { animation: none; }
    .typing-dots span { animation: none; }
    .spin { animation: none; }
  }
</style>
