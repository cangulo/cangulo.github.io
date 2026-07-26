import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveNoteResource, RESOURCE_EMOJI } from '../dist/docusaurus/noteResource.js';

test('resolveNoteResource maps a book note to its emoji + noun', () => {
  const resource = resolveNoteResource({
    type: 'book',
    title: 'Staff Engineer',
    url: 'https://staffeng.com/book',
  });
  assert.deepEqual(resource, {
    emoji: RESOURCE_EMOJI.book,
    noun: 'book',
    title: 'Staff Engineer',
    url: 'https://staffeng.com/book',
  });
});

test('resolveNoteResource maps a course note to its emoji + noun', () => {
  const resource = resolveNoteResource({
    type: 'course',
    title: 'Some course',
    url: 'https://example.com/course',
  });
  assert.equal(resource.emoji, RESOURCE_EMOJI.course);
  assert.equal(resource.noun, 'course');
});

test('resolveNoteResource returns null for an unknown type', () => {
  assert.equal(
    resolveNoteResource({ type: 'podcast', title: 'X', url: 'https://x' }),
    null,
  );
});

test('resolveNoteResource returns null when title or url is missing', () => {
  assert.equal(resolveNoteResource({ type: 'book', url: 'https://x' }), null);
  assert.equal(resolveNoteResource({ type: 'book', title: 'X' }), null);
});

test('resolveNoteResource returns null when given no frontmatter', () => {
  assert.equal(resolveNoteResource(), null);
});
