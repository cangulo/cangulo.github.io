import React from 'react';
import PropTypes from 'prop-types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { CaptionComponent } from '@cangulo-blog/components'


function Caption({ label, link, linkIsRelative }) {

    const { siteConfig } = useDocusaurusContext()
    const rawGitUrl = siteConfig.customFields.rawGitUrl
    const urlToFile =
        linkIsRelative ?
            rawGitUrl.concat(link) :
            link

    return <CaptionComponent label={label} link={urlToFile} />
}

Caption.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkIsRelative: PropTypes.bool.isRequired
};

export default Caption