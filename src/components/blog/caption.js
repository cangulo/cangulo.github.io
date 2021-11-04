import React from 'react';

const Caption = ({ label, relativeLink }) => {
    if (relativeLink) {
        const baseGitUrl =
            "https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/"

        const urlToFile = relativeLink.includes("http") ?
            relativeLink :
            baseGitUrl.concat(relativeLink)

        return (
            <a href={urlToFile}>
                <p className="caption">{label ?? `Link to the file`}</p>
            </a>
        )
    } else {
        return <p className="caption" >{label ?? `Link to the file`}</p>
    }
};

export default Caption