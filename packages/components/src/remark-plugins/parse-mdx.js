import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxjs } from 'micromark-extension-mdxjs';
import { mdxFromMarkdown } from 'mdast-util-mdx';

/**
 * Parse an MDX snippet (import statements and/or JSX) into mdast nodes that are
 * valid in an MDX v3 tree (mdxjsEsm / mdxJsxFlowElement, with estree data
 * attached). This replaces the MDX v1 trick of injecting raw
 * `{type:'import'}` / `{type:'jsx'}` string nodes, which no longer exist.
 *
 * @param {string} snippet
 * @returns {import('mdast').RootContent[]}
 */
export function parseMdxSnippet(snippet) {
  const tree = fromMarkdown(snippet, {
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown()],
  });
  return tree.children;
}
