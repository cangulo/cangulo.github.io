import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CaptionComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.link) {
            return (
                <a href={this.props.link}>
                    <p style={{ textAlign: 'center' }}>{this.props.label ?? `File Link`}</p>
                </a>
            )
        } else {
            return <p style={{ textAlign: 'center' }} >{this.props.label ?? ``}</p>
        }
    }
}

CaptionComponent.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string
};


export default CaptionComponent