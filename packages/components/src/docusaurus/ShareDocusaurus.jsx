import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ShareComponent from '../components/ShareComponent.js';

function ShareDocusaurus({ preSlug, slug, title, tags }) {
  const { siteConfig } = useDocusaurusContext();
  let fullUrl = `${siteConfig.url}`;

  if (preSlug) {
    fullUrl = `${fullUrl}/${preSlug}/${slug}`;
  } else {
    fullUrl = `${fullUrl}/${slug}`;
  }

  return <ShareComponent title={title} link={fullUrl} tags={tags} />;
}

export default ShareDocusaurus;
