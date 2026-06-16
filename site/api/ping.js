export const config = { runtime: 'edge' };

export default async function handler() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) return new Response(JSON.stringify({ ok: false, error: 'no key' }), { headers: { 'Content-Type': 'application/json' } });

  const res = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
  const data = await res.json();
  const names = (data.models ?? []).map((m) => m.name);
  return new Response(JSON.stringify({ ok: true, models: names }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
