export const config = { runtime: 'edge' };

export default async function handler() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) return new Response(JSON.stringify({ error: 'no key' }), { status: 500 });

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Say "hello" in one word.' }] }],
      }),
    },
  );

  const data = await res.json();
  return new Response(JSON.stringify({ status: res.status, data }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
