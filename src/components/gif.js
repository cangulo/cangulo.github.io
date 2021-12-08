import React from 'react';

const Gif = ({ link }) => {
    return (<div className="gif-iframe">
        {/* <iframe src={link} width="480" height="480" frameBorder="0" className="giphy-embed" /> */}
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
            <iframe src={link} width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <p>
            <a href={link}>via GIPHY</a>
        </p>
    </div >)
};

export default Gif