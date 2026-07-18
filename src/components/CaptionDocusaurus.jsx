// Local stand-in for CaptionDocusaurus from @cangulo-blog/components, keeping
// the same prop API while the package is disabled (see MAINTENANCE.md Phase 4).
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CaptionDocusaurus({ label, link, linkIsRelative }) {
  const { siteConfig } = useDocusaurusContext();
  const url = linkIsRelative ? siteConfig.customFields.rawGitUrl.concat(link) : link;

  if (url) {
    return (
      <a href={url}>
        <p style={{ textAlign: 'center' }}>{label ?? 'File Link'}</p>
      </a>
    );
  }
  return <p style={{ textAlign: 'center' }}>{label ?? ''}</p>;
}
