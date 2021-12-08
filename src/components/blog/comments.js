import React from "react";
import HyvorTalk from 'hyvor-talk-react'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const Comments = () => {

  const { siteConfig } = useDocusaurusContext();
  const websiteId = siteConfig.customFields.hyvorTalkSiteId

  return (
    <section>
      <h2>Comments</h2>
      <HyvorTalk.Embed
        loadMode="scroll"
        websiteId={websiteId}
      />
    </section>
  )
}

export default Comments