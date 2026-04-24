import type { Root, Element } from 'hast';
import { visit } from 'unist-util-visit';

/**
 * Wraps every <table> rendered from markdown in <div class="table-wrap">.
 * The wrapper gets horizontal scroll on narrow viewports so wide registries
 * (role registry, authority registry, decision matrix…) don't overflow the
 * content column on mobile.
 */
export default function rehypeTableWrap() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent: any) => {
      if (node.tagName !== 'table' || !parent || typeof index !== 'number') return;
      if (parent.type === 'element' && (parent as Element).tagName === 'div') {
        const classes = ((parent as Element).properties?.className ?? []) as string[];
        if (classes.includes('table-wrap')) return;
      }
      const wrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrap'] },
        children: [node],
      };
      parent.children[index] = wrapper;
    });
  };
}
