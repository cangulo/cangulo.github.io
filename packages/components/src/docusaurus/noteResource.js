// Metadata that drives the auto-generated note intro panel and the
// book/course badge. A note declares `type` in its frontmatter; add a new
// entry here to support another kind of note (e.g. `talk`, `article`).
export const RESOURCE_EMOJI = {
  book: '📚',
  course: '🎓',
};

/**
 * Resolve a note's resource frontmatter into the pieces the intro panel needs.
 * Returns `null` when the note isn't a recognised book/course note or is
 * missing the resource title/url, so callers can render nothing.
 *
 * @param {{ type?: string, title?: string, url?: string }} frontMatter
 * @returns {{ emoji: string, noun: string, title: string, url: string } | null}
 */
export function resolveNoteResource({ type, title, url } = {}) {
  const emoji = RESOURCE_EMOJI[type];
  if (!emoji || !title || !url) {
    return null;
  }
  return { emoji, noun: type, title, url };
}
