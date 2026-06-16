export const config = { runtime: 'edge' };

export default function handler() {
  return new Response(JSON.stringify({ ok: true, key: !!process.env.GOOGLE_AI_API_KEY }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
