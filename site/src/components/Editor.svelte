<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import Link from '@tiptap/extension-link';
  import { Markdown } from 'tiptap-markdown';

  export let content: string = '';
  export let path: string = '';

  type StatusKind = 'idle' | 'saving' | 'success' | 'error';

  let element: HTMLElement;
  let editor: Editor;
  let commitMessage = '';
  let statusKind: StatusKind = 'idle';
  let statusMessage = '';
  let previewMarkdown = content;
  let isDirty = false;
  let revision = 0;

  const toolbarGroups = [
    [
      { label: 'Undo', title: 'Undo', action: () => editor.chain().focus().undo().run() },
      { label: 'Redo', title: 'Redo', action: () => editor.chain().focus().redo().run() },
    ],
    [
      { label: 'B', title: 'Bold', active: () => editor.isActive('bold'), action: () => editor.chain().focus().toggleBold().run() },
      { label: 'I', title: 'Italic', active: () => editor.isActive('italic'), action: () => editor.chain().focus().toggleItalic().run() },
      { label: 'S', title: 'Strikethrough', active: () => editor.isActive('strike'), action: () => editor.chain().focus().toggleStrike().run() },
      { label: '`', title: 'Inline code', active: () => editor.isActive('code'), action: () => editor.chain().focus().toggleCode().run() },
    ],
    [
      { label: 'H1', title: 'Heading 1', active: () => editor.isActive('heading', { level: 1 }), action: () => editor.chain().focus().toggleHeading({ level: 1 }).run() },
      { label: 'H2', title: 'Heading 2', active: () => editor.isActive('heading', { level: 2 }), action: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
      { label: 'H3', title: 'Heading 3', active: () => editor.isActive('heading', { level: 3 }), action: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
    ],
    [
      { label: 'UL', title: 'Bullet list', active: () => editor.isActive('bulletList'), action: () => editor.chain().focus().toggleBulletList().run() },
      { label: 'OL', title: 'Numbered list', active: () => editor.isActive('orderedList'), action: () => editor.chain().focus().toggleOrderedList().run() },
      { label: 'Quote', title: 'Blockquote', active: () => editor.isActive('blockquote'), action: () => editor.chain().focus().toggleBlockquote().run() },
      { label: 'Code', title: 'Code block', active: () => editor.isActive('codeBlock'), action: () => editor.chain().focus().toggleCodeBlock().run() },
    ],
  ];

  function refreshPreview() {
    if (!editor) return;
    previewMarkdown = editor.storage.markdown.getMarkdown();
    revision += 1;
  }

  function setLink() {
    const previousUrl = editor.getAttributes('link').href || '';
    const url = window.prompt('Link URL', previousUrl);

    if (url === null) return;
    if (url.trim() === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      refreshPreview();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url.trim() }).run();
    refreshPreview();
  }

  function insertHorizontalRule() {
    editor.chain().focus().setHorizontalRule().run();
    refreshPreview();
  }

  onMount(() => {
    commitMessage = `Update ${path}`;
    editor = new Editor({
      element,
      extensions: [
        StarterKit,
        Link.configure({
          openOnClick: false,
          autolink: true,
          HTMLAttributes: {
            rel: 'noopener noreferrer',
            target: '_blank',
          },
        }),
        Markdown.configure({
          html: true,
          transformPastedText: true,
          transformCopiedText: true,
        }),
      ],
      content,
      editorProps: {
        attributes: {
          class: 'cms-editor prose',
          'aria-label': `Editing ${path}`,
        },
      },
      onUpdate: () => {
        isDirty = true;
        statusKind = 'idle';
        statusMessage = '';
        refreshPreview();
      },
      onSelectionUpdate: () => {
        revision += 1;
      },
    });
    refreshPreview();
  });

  onDestroy(() => {
    editor?.destroy();
  });

  async function handleSave() {
    if (!editor || statusKind === 'saving') return;

    statusKind = 'saving';
    statusMessage = 'Saving to GitHub...';

    try {
      const markdown = editor.storage.markdown.getMarkdown();
      const res = await fetch('/api/commit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path,
          content: markdown,
          message: commitMessage.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        const detail = data.details?.message || data.details?.errors?.[0]?.message || data.details || '';
        throw new Error(detail ? `${data.error}: ${detail}` : data.error || 'Save failed.');
      }

      statusKind = 'success';
      statusMessage = data.message || 'Saved to GitHub.';
      commitMessage = `Update ${path}`;
      isDirty = false;
      previewMarkdown = markdown;
    } catch (err) {
      statusKind = 'error';
      statusMessage = err instanceof Error ? err.message : 'Network error while saving.';
      console.error(err);
    }
  }
</script>

<div class="editor-shell">
  {#if editor}
    <div class="toolbar" aria-label="Editor toolbar">
      {#each toolbarGroups as group}
        <div class="tool-group">
          {#each group as tool}
            <button
              type="button"
              class:active={tool.active?.()}
              title={tool.title}
              aria-label={tool.title}
              onclick={tool.action}
            >
              {tool.label}
            </button>
          {/each}
        </div>
      {/each}
      <div class="tool-group">
        <button
          type="button"
          class:active={editor.isActive('link')}
          title="Add or edit link"
          aria-label="Add or edit link"
          onclick={setLink}
        >
          Link
        </button>
        <button
          type="button"
          title="Horizontal rule"
          aria-label="Horizontal rule"
          onclick={insertHorizontalRule}
        >
          HR
        </button>
      </div>
    </div>
  {/if}

  <div class="editor-grid">
    <div class="editor-pane">
      <div bind:this={element}></div>
    </div>
    <aside class="markdown-pane" aria-live="polite">
      <div class="pane-title">
        <span>Markdown</span>
        {#if isDirty}<strong>Unsaved</strong>{/if}
      </div>
      {#key revision}
        <pre>{previewMarkdown}</pre>
      {/key}
    </aside>
  </div>

  {#if statusMessage}
    <p class={`status ${statusKind}`}>{statusMessage}</p>
  {/if}

  <div class="save-bar">
    <label>
      <span>Commit message</span>
      <input
        bind:value={commitMessage}
        placeholder={`Update ${path}`}
      />
    </label>
    <button type="button" onclick={handleSave} disabled={statusKind === 'saving'}>
      {statusKind === 'saving' ? 'Saving...' : 'Commit to GitHub'}
    </button>
  </div>
</div>

<style>
  .editor-shell {
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    background: var(--color-surface);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
  }
  .toolbar,
  .save-bar {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
    padding: 0.75rem;
    border-bottom: 1px solid var(--color-border);
    background: var(--color-surface-muted);
  }
  .tool-group {
    display: inline-flex;
    gap: 0.25rem;
    padding-right: 0.55rem;
    border-right: 1px solid var(--color-border);
  }
  .tool-group:last-child {
    border-right: none;
    padding-right: 0;
  }
  button {
    min-height: 2.1rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-text);
    font: inherit;
    font-size: 0.84rem;
    font-weight: 700;
    cursor: pointer;
  }
  .toolbar button {
    min-width: 2.2rem;
    padding: 0.25rem 0.55rem;
  }
  button:hover:not(:disabled),
  button.active {
    border-color: var(--color-primary);
    color: var(--color-primary-dark);
    background: color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
  }
  button:disabled {
    cursor: wait;
    opacity: 0.7;
  }
  .editor-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.45fr);
    min-height: 36rem;
  }
  .editor-pane {
    min-width: 0;
    padding: 1rem;
  }
  .editor-pane :global(.cms-editor) {
    max-width: none;
    min-height: 32rem;
    padding: 0.5rem;
    outline: none;
  }
  .markdown-pane {
    min-width: 0;
    border-left: 1px solid var(--color-border);
    background: color-mix(in srgb, var(--color-surface-muted) 65%, var(--color-surface));
    display: flex;
    flex-direction: column;
  }
  .pane-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.75rem;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-muted);
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .pane-title strong {
    color: var(--color-accent-hover);
    font-size: 0.74rem;
  }
  pre {
    margin: 0;
    padding: 0.85rem;
    overflow: auto;
    white-space: pre-wrap;
    word-break: break-word;
    color: var(--color-text);
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.45;
  }
  .status {
    margin: 0;
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--color-border);
    font-size: 0.9rem;
  }
  .status.saving {
    color: var(--color-text-muted);
  }
  .status.success {
    color: var(--color-primary-dark);
    background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  }
  .status.error {
    color: var(--color-danger);
    background: color-mix(in srgb, var(--color-danger) 10%, transparent);
  }
  .save-bar {
    justify-content: space-between;
    border-top: 1px solid var(--color-border);
    border-bottom: none;
  }
  label {
    flex: 1;
    min-width: min(100%, 20rem);
    display: grid;
    gap: 0.25rem;
    color: var(--color-text-muted);
    font-size: 0.82rem;
    font-weight: 700;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-text);
    padding: 0.62rem 0.75rem;
    font: inherit;
    font-size: 0.95rem;
    font-weight: 400;
  }
  .save-bar button {
    min-height: 2.65rem;
    padding: 0.5rem 1rem;
    border-color: var(--color-primary);
    background: var(--color-primary);
    color: var(--color-surface);
  }
  @media (max-width: 960px) {
    .editor-grid {
      grid-template-columns: 1fr;
    }
    .markdown-pane {
      max-height: 18rem;
      border-left: none;
      border-top: 1px solid var(--color-border);
    }
  }
  @media (max-width: 520px) {
    .toolbar,
    .save-bar {
      align-items: stretch;
    }
    .tool-group {
      border-right: none;
      padding-right: 0;
      flex-wrap: wrap;
    }
    .save-bar button {
      width: 100%;
    }
  }
</style>
