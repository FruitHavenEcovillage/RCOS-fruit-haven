import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ ok: false, error: 'no key' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
  const data = await res.json();
  const names = (data.models ?? []).map((model: { name: string }) => model.name);

  return new Response(JSON.stringify({ ok: true, models: names }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
