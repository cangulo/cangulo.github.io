import test from 'node:test';
import assert from 'node:assert/strict';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfmTable } from 'micromark-extension-gfm-table';
import { gfmTableFromMarkdown } from 'mdast-util-gfm-table';
import { addJsxCode, alignTableCenter } from '../dist/remark-plugins/index.js';

const TRUNCATED_POST = 'Intro text\n\n{/* truncate */}\n\nBody text\n';
const SHORT_POST = 'Just a one-liner announcement\n';

function parse(md) {
  return fromMarkdown(md);
}

test('addJsxCode injects imports at start and jsx at end of truncated posts', () => {
  const ast = parse(TRUNCATED_POST);
  const vfile = { value: TRUNCATED_POST };
  addJsxCode({
    importStatement: ["import AboutMe from '@cangulo-blog/components/mdx/aboutme_description.mdx'"],
    position: 'start',
  })(ast, vfile);
  addJsxCode({
    jsx: ['<AboutMe />', '<ShareDocusaurus slug={frontMatter.slug} title={frontMatter.title} tags={frontMatter.tags} />'],
  })(ast, vfile);

  const first = ast.children[0];
  assert.equal(first.type, 'mdxjsEsm');
  assert.ok(first.data?.estree, 'import must carry an estree program');

  const last = ast.children.at(-1);
  assert.equal(last.type, 'mdxJsxFlowElement');
  assert.equal(last.name, 'ShareDocusaurus');
  const slugAttr = last.attributes.find((a) => a.name === 'slug');
  assert.ok(slugAttr?.value?.data?.estree, 'jsx attribute expressions must carry estree');
});

test('addJsxCode leaves untruncated posts untouched', () => {
  const ast = parse(SHORT_POST);
  const before = ast.children.length;
  addJsxCode({ importStatement: ["import X from 'y'"], jsx: ['<X />'] })(ast, {
    value: SHORT_POST,
  });
  assert.equal(ast.children.length, before);
});

test('alignTableCenter wraps multi-row tables in a centering div', () => {
  const md = '| a | b |\n| - | - |\n| 1 | 2 |\n';
  const ast = fromMarkdown(md, {
    extensions: [gfmTable()],
    mdastExtensions: [gfmTableFromMarkdown()],
  });
  alignTableCenter()(ast);

  const wrapper = ast.children[0];
  assert.equal(wrapper.type, 'mdxJsxFlowElement');
  assert.equal(wrapper.name, 'div');
  assert.equal(wrapper.children[0].type, 'table');
  const styleAttr = wrapper.attributes.find((a) => a.name === 'style');
  assert.ok(styleAttr?.value?.data?.estree, 'style expression must carry estree');
});
