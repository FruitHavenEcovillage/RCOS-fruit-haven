import type { Root } from 'mdast';

export default function remarkStripFirstH1() {
  return (tree: Root) => {
    const i = tree.children.findIndex(
      (n) => n.type === 'heading' && n.depth === 1
    );
    if (i !== -1) tree.children.splice(i, 1);
  };
}
