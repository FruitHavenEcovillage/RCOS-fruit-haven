export function slugToTitle(slug: string): string {
  return slug
    .split('/')
    .pop()!
    .split('-')
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}
