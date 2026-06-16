export const config = { runtime: 'edge' };

export default async function handler() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return new Response(JSON.stringify({ error: 'no key' }), { status: 500 });

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: 'Say hello in one word.' }],
      max_tokens: 10,
    }),
  });

  const data = await res.json();
  return new Response(JSON.stringify({ status: res.status, data }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
