import React from 'react';
import Content from '@theme-original/BlogPostItem/Content';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {NoteResource} from '@cangulo-blog/components';

type Props = {readonly children?: React.ReactNode; readonly className?: string};

// Prepend the auto-generated book/course intro panel to notes on the post
// page. NoteResource renders nothing unless the frontmatter declares a
// recognised `type` + `resource_title`/`resource_url`, so other sections are
// untouched. Injecting this via the theme (rather than a remark plugin) keeps
// it out of the truncated list excerpt and clear of the truncate-marker split.
export default function ContentWrapper(props: Props): React.JSX.Element {
  const {frontMatter, isBlogPostPage} = useBlogPost();
  const {type, resource_title, resource_url} = frontMatter as {
    type?: string;
    resource_title?: string;
    resource_url?: string;
  };

  return (
    <>
      {isBlogPostPage && (
        <NoteResource type={type} title={resource_title} url={resource_url} />
      )}
      <Content {...props} />
    </>
  );
}
