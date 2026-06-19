import type { APIRoute } from 'astro';

export const prerender = false;

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  if (!body.message?.trim()) {
    return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
  }

  const systemPrompt = body.context
    ? `You are a helpful assistant for the Fruit Haven community's RCOS governance documentation site. You help visitors understand the organization's structure, governance layers, proposals, and bylaws.\n\nYou have access to the following documentation:\n\n---\n${body.context}\n---\n\nWhen referencing a document, format links as [Title](URL) so users can click through.`
    : `You are a helpful assistant for the Fruit Haven community's RCOS governance documentation site.`;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...(body.history ?? []).map((message: { role?: string; content: string }) => ({
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: message.content,
    })),
    { role: 'user', content: body.message },
  ];

  const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages,
      max_tokens: 1024,
      stream: true,
    }),
  });

  if (!groqRes.ok) {
    const err = await groqRes.text();
    return new Response(JSON.stringify({ error: `Groq error: ${err.slice(0, 300)}` }), {
      status: 502,
    });
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      const reader = groqRes.body?.getReader();
      if (!reader) {
        controller.close();
        return;
      }

      const decoder = new TextDecoder();
      let buffer = '';
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const json = line.slice(6).trim();
            if (!json || json === '[DONE]') continue;
            try {
              const parsed = JSON.parse(json);
              const text = parsed?.choices?.[0]?.delta?.content;
              if (text) controller.enqueue(encoder.encode(text));
            } catch {
              // Skip malformed chunks from the upstream stream.
            }
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
      'Access-Control-Allow-Origin': '*',
    },
  });
};
