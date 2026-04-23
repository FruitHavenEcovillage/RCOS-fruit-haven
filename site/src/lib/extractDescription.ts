/**
 * Pull a short human-readable description from an artifact body.
 * Strategy:
 *   1. First blockquote content (the project uses these as summaries).
 *   2. Otherwise, undefined — let the caller decide what to show.
 */
export function extractDescription(body: string | undefined): string | undefined {
  if (!body) return undefined;

  const blockquoteLines: string[] = [];
  for (const line of body.split('\n')) {
    if (line.startsWith('>')) {
      blockquoteLines.push(line.replace(/^>\s?/, ''));
    } else if (blockquoteLines.length > 0) {
      break;
    }
  }
  if (blockquoteLines.length === 0) return undefined;

  let text = blockquoteLines.join(' ').trim();

  text = text
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1$2')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

  const MAX = 180;
  if (text.length > MAX) {
    text = text.slice(0, MAX).replace(/\s+\S*$/, '') + '…';
  }
  return text;
}
