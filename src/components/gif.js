import React from 'react';
import PropTypes from 'prop-types';

function Gif({ id }) {

    return (<div style={{
        textAlign: 'center'
    }}>
        <iframe
            src={`https://giphy.com/embed/${id}`}
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            scrolling="no"
        ></iframe>
        <p>
            <a href={`https://giphy.com/gifs/${id}`}>via GIPHY</a>
        </p>
    </div >)
};

Gif.propTypes = {
    id: PropTypes.string.isRequired
}

export default Gif