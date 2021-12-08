import React from 'react';
import PropTypes from 'prop-types';
import {
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
    TelegramShareButton,
    TelegramIcon
} from 'react-share'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function ShareCard({ slug, title, tags }) {

    const { siteConfig } = useDocusaurusContext();
    const fullUrl = `${siteConfig.url}/${slug}`

    return <div>
        <h2>Did you like it? Share It!</h2>
        <LinkedinShareButton url={fullUrl} title={title} >
            <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <TwitterShareButton
            url={fullUrl}
            title={title}
            via="AnguloMascarell"
            hashtags={tags ?? ``}
        >
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <EmailShareButton
            subject={`Check this post about ${title}`}
            body={`Hi there, check the next post: ${title} \n\n`}
            url={fullUrl}
        >
            <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <WhatsappShareButton
            url={fullUrl}
            title={title}
        >
            <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton title={title} url={fullUrl}>
            <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
        <br style={{ marginBottom: `15px` }} />
    </div>;
};

ShareCard.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
};

export default ShareCard