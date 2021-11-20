import React from 'react';

const Caption = ({ label, linkIsRelative, link }) => {
    if (link) {
        const baseGitUrl =
            "https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/"

        const urlToFile = linkIsRelative ?
            baseGitUrl.concat(link) :
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