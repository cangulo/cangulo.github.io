import React from 'react';
import Info from '@theme-original/BlogPostItem/Header/Info';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import styles from './styles.module.css';

type Props = {readonly className?: string};

// Book/course marker shown next to the date + reading time on notes. Only
// notes carry a `type` frontmatter, so other blog sections are untouched.
// Add an entry here to support another note kind (e.g. talk, article).
const NOTE_BADGES: Record<string, {emoji: string; label: string}> = {
  book: {emoji: '📚', label: 'Book'},
  course: {emoji: '🎓', label: 'Course'},
};

export default function InfoWrapper(props: Props): React.JSX.Element {
  const {frontMatter} = useBlogPost();
  const badge = NOTE_BADGES[(frontMatter as {type?: string}).type ?? ''];

  if (!badge) {
    return <Info {...props} />;
  }

  return (
    <span className={styles.infoWithBadge}>
      <Info {...props} />
      <span className={styles.typeBadge}>
        {badge.emoji} {badge.label}
      </span>
    </span>
  );
}
