import Anthropic from '@anthropic-ai/sdk';

export const config = { runtime: 'nodejs' };

// Vercel serverless function — runs server-side, API key never reaches the browser.
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { message: string; history?: { role: 'user' | 'assistant'; content: string }[]; context?: string };
  try {
    body = await req.json();
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

  const systemPrompt = `You are a helpful assistant for the Fruit Haven community's RCOS governance documentation site. You help community members and visitors understand the organization's structure, governance layers, proposals, bylaws, and other documentation.

${body.context ? `You have access to the following Fruit Haven RCOS documentation:\n\n---\n${body.context}\n---\n\nWhen referencing a document, format links as [Title](URL) so users can click through.` : 'Answer questions about Fruit Haven\'s governance, community structure, and RCOS documentation as best you can.'}`;

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
      'Cache-Control': 'no-cache',
    },
  });
}
