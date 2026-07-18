import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CaptionComponent from '../components/CaptionComponent.js';

function CaptionDocusaurus({ label, link, linkIsRelative }) {
  const { siteConfig } = useDocusaurusContext();
  const rawGitUrl = siteConfig.customFields.rawGitUrl;
  const urlToFile = linkIsRelative ? rawGitUrl.concat(link) : link;

  return <CaptionComponent label={label} link={urlToFile} />;
}

export default CaptionDocusaurus;
