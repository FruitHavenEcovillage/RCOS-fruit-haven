<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import Link from '@tiptap/extension-link';
  import { Markdown } from 'tiptap-markdown';

  export let content: string = '';
  export let path: string = '';

  let element: HTMLElement;
  let editor: Editor;
  let isSaving: boolean = false;
  let statusMessage: string = '';
  let errorMessage: string = '';
  let commitMessage: string = '';

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit,
        Link,
        Markdown,
      ],
      content: content,
      editorProps: {
        attributes: {
          class: 'prose mx-auto focus:outline-none min-h-[500px] border p-4 rounded-md',
        },
      },
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  async function handleSave() {
    if (editor && !isSaving) {
      isSaving = true;
      statusMessage = '';
      errorMessage = '';
      try {
        const markdown = editor.storage.markdown.getMarkdown();
        const res = await fetch('/api/commit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path,
            content: markdown,
            message: commitMessage.trim() || undefined,
          })
        });
        
        const data = await res.json();
        if (res.ok) {
          statusMessage = data.message || 'Saved to GitHub.';
          commitMessage = '';
        } else {
          errorMessage = data.missing?.length
            ? `${data.error} Missing: ${data.missing.join(', ')}`
            : data.error || 'Save failed.';
          console.error(data);
        }
      } catch (err) {
        errorMessage = 'Network error while saving.';
        console.error(err);
      } finally {
        isSaving = false;
      }
    }
  }
</script>

<div class="editor-wrapper bg-white max-w-4xl mx-auto rounded-lg shadow p-6">
  {#if editor}
    <div class="toolbar border-b border-gray-200 pb-4 mb-4 flex gap-2 flex-wrap">
      <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium" on:click={() => editor.chain().focus().toggleBold().run()}>Bold</button>
      <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium" on:click={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
      <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium" on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
      <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium" on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
      <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium" on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
      <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium" on:click={() => editor.chain().focus().toggleBulletList().run()}>Bullets</button>
      <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium" on:click={() => editor.chain().focus().toggleOrderedList().run()}>Numbers</button>
      <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-medium" on:click={() => editor.chain().focus().toggleBlockquote().run()}>Quote</button>
    </div>
  {/if}
  
  <div bind:this={element} class="editor-content"></div>
  
  {#if statusMessage}
    <p class="mt-4 rounded border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">{statusMessage}</p>
  {/if}

  {#if errorMessage}
    <p class="mt-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{errorMessage}</p>
  {/if}

  <div class="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-4 sm:flex-row sm:items-end sm:justify-between">
    <label class="flex-1 text-sm font-medium text-gray-700">
      Commit message
      <input
        class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-normal text-gray-900 shadow-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
        bind:value={commitMessage}
        placeholder={`Update ${path}`}
      />
    </label>
    <button 
      class="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700 transition font-medium disabled:opacity-50"
      on:click={handleSave}
      disabled={isSaving}
    >
      {isSaving ? 'Saving...' : 'Save Changes to GitHub'}
    </button>
  </div>
</div>
