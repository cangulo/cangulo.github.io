import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Caption = ({ label, linkIsRelative, link }) => {
    if (link) {

        const { siteConfig } = useDocusaurusContext();
        const rawGitUrl = siteConfig.customFields.rawGitUrl

        const urlToFile =
            linkIsRelative === "true" ?
                rawGitUrl.concat(link) :
                link

        return (
            <a href={urlToFile}>
                <p className="text--center">{label ?? `Link to the file`}</p>
            </a>
        )
    } else {
        return <p className="text--center" >{label ?? `Link to the file`}</p>
    }
};

export default Caption