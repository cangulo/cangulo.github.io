import React from 'react';
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

const ShareCard = ({ slug, title, tags }) => {
    const { siteConfig } = useDocusaurusContext();

    const fullUrl = `https://cangulo.github.io/${slug}`

    return <div>
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
    </div>;
};

export default ShareCard