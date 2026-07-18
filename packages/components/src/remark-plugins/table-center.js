import { parseMdxSnippet } from './parse-mdx.js';

/**
 * Horizontally centers markdown tables by wrapping each one in a flex <div>.
 * MDX v3 rewrite: MDX v1 allowed pushing unbalanced raw `<div>` / `</div>`
 * string nodes around the table; v3 requires balanced JSX, so the table is
 * moved *inside* a real mdxJsxFlowElement instead.
 */
export default function alignTableCenter() {
  return (ast) => {
    const tables = ast.children.filter(
      (node) => node.type === 'table' && node.children.length > 1
    );
    for (const table of tables) {
      const index = ast.children.indexOf(table);
      const [wrapper] = parseMdxSnippet(
        '<div style={{display:"flex",justifyContent:"center"}}></div>'
      );
      wrapper.children = [table];
      ast.children.splice(index, 1, wrapper);
    }
  };
}
