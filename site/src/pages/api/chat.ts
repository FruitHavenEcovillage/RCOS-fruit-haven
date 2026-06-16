import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';
import { getCollection } from 'astro:content';

export const prerender = false;

let cachedContext: string | null = null;

async function buildContext(): Promise<string> {
  if (cachedContext) return cachedContext;

  const layers = await getCollection('layers');
  const proposals = await getCollection('proposals');

  const layerSections = layers.map((l) => {
    const url = `/layers/${l.id.replace(/\.md$/, '')}`;
    return `### Layer: ${l.data.title || l.id}\nURL: ${url}\n\n${(l.body || '').slice(0, 3000)}`;
  });

  const proposalSections = proposals.map((p) => {
    const url = `/proposals/${p.id.replace(/\.md$/, '')}`;
    return `### Proposal: ${p.data.title} (${p.data.status ?? 'unknown'})\nURL: ${url}\n${p.data.summary ? `Summary: ${p.data.summary}\n` : ''}\n${(p.body || '').slice(0, 2000)}`;
  });

  cachedContext = [
    '## RCOS Layers (governance structure)',
    ...layerSections,
    '',
    '## Proposals',
    ...proposalSections,
  ].join('\n\n');

  return cachedContext;
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { message: string; history?: { role: 'user' | 'assistant'; content: string }[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!body.message?.trim()) {
    return new Response(JSON.stringify({ error: 'Message is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const context = await buildContext();

  const systemPrompt = `You are a helpful assistant for the Fruit Haven community's RCOS governance documentation site. You help community members and visitors understand the organization's structure, governance layers, proposals, bylaws, and other documentation.

You have access to the full content of Fruit Haven's RCOS documentation below. When answering questions, reference specific layers, articles, or proposals by name and provide the URL so users can read more. Be concise but thorough. If something is not covered in the documentation, say so honestly.

---
${context}
---

When referencing a document, format links as [Title](URL) so users can click through.`;

  const client = new Anthropic({ apiKey });

  const messages: Anthropic.MessageParam[] = [
    ...(body.history ?? []),
    { role: 'user', content: body.message },
  ];

  const stream = await client.messages.stream({
    model: 'claude-opus-4-8',
    max_tokens: 1024,
    thinking: { type: 'adaptive' },
    system: systemPrompt,
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
    },
  });
};
