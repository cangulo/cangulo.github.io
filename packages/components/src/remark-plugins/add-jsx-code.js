import { parseMdxSnippet } from './parse-mdx.js';

/**
 * Injects import statements and/or JSX elements into MDX documents that
 * contain a truncate marker (i.e. real posts, not one-liner announcements).
 * MDX v3 rewrite of the original MDX v1 plugin: snippets are parsed into
 * proper mdxjsEsm / mdxJsxFlowElement nodes instead of raw string nodes.
 *
 * Options:
 * - importStatement: string | string[] — e.g. `import X from 'pkg'`
 * - jsx:             string | string[] — e.g. `<X prop={frontMatter.title} />`
 * - position:        'start' to prepend (used for imports); default appends
 */
export default function addJsxCode(options = {}) {
  return (ast, vfile) => {
    const hasTruncateMarker = /truncate/.test(String(vfile.value ?? ''));
    if (!hasTruncateMarker || (!options.importStatement && !options.jsx)) {
      return;
    }

    const toArray = (v) => (typeof v === 'string' ? [v] : v ?? []);

    for (const statement of toArray(options.importStatement)) {
      insert(ast, statement, options.position);
    }
    for (const code of toArray(options.jsx)) {
      insert(ast, code);
    }
  };

  function insert(ast, snippet, position) {
    const nodes = parseMdxSnippet(snippet);
    if (position === 'start') {
      ast.children.splice(0, 0, ...nodes);
    } else {
      ast.children.push(...nodes);
    }
  }
}
