/**
 * Pull a short human-readable description from an artifact body.
 * Strategy:
 *   1. First blockquote content (the project uses these as intros).
 *   2. Fallback: content of the first :::rationale{…} directive block.
 *   3. Otherwise, undefined — let the caller decide what to show.
 */
export function extractDescription(body: string | undefined): string | undefined {
  if (!body) return undefined;

  const lines = body.split('\n');

  const blockquoteLines: string[] = [];
  for (const line of lines) {
    if (line.startsWith('>')) {
      blockquoteLines.push(line.replace(/^>\s?/, ''));
    } else if (blockquoteLines.length > 0) {
      break;
    }
  }

  let raw = blockquoteLines.join(' ').trim();

  if (!raw) {
    const rationaleLines: string[] = [];
    let inside = false;
    for (const line of lines) {
      if (!inside && /^:::rationale(\{[^}]*\})?\s*$/.test(line)) {
        inside = true;
        continue;
      }
      if (inside) {
        if (/^:::\s*$/.test(line)) break;
        rationaleLines.push(line);
      }
    }
    raw = rationaleLines.join(' ').trim();
  }

  if (!raw) return undefined;

  let text = raw
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
