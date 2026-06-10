import { getCollection } from 'astro:content';

export async function GET() {
  const layers = await getCollection('layers');
  const proposals = await getCollection('proposals');

  const searchData = [
    ...layers.map((l) => ({
      title: l.data.title || l.id,
      url: `/layers/${l.id.replace(/\.md$/, '')}`,
      body: l.body || '',
      type: 'Layer',
    })),
    ...proposals.map((p) => ({
      title: p.data.title,
      url: `/proposals/${p.id.replace(/\.md$/, '')}`,
      body: p.body || '',
      summary: p.data.summary || '',
      type: 'Proposal',
    })),
  ];

  return new Response(JSON.stringify(searchData), {
    headers: { 'Content-Type': 'application/json' },
  });
}
