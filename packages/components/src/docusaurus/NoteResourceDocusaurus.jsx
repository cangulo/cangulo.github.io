import React from 'react';
import Admonition from '@theme/Admonition';
import { resolveNoteResource } from './noteResource.js';

/**
 * Auto-generated intro panel for a note. Driven entirely by the note's
 * frontmatter (`type`, `resource_title`, `resource_url`), it renders an info
 * admonition such as:
 *
 *   📚 Here are my notes about the book <resource title>
 *
 * Renders nothing when the frontmatter isn't a recognised book/course note,
 * so it is safe to inject into every note.
 */
function NoteResource({ type, title, url }) {
  const resource = resolveNoteResource({ type, title, url });
  if (!resource) {
    return null;
  }

  return (
    <Admonition type="info">
      <p>
        {resource.emoji} Here are my notes about the {resource.noun}{' '}
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          {resource.title}
        </a>
      </p>
    </Admonition>
  );
}

export default NoteResource;
