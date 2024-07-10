import React from "react";
import { Comments } from '@hyvor/hyvor-talk-react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default () => {

  const { siteConfig } = useDocusaurusContext();
  const websiteId = parseInt(siteConfig.customFields.hyvorTalkSiteId)

  return (
    <section>
      <h2>Comments</h2>
        <Comments
            loadMode="scroll"
            website-id={websiteId}
            page-id=""
        />
    </section>
  )
}
