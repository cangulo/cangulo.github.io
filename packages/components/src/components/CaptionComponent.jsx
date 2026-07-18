import React from 'react';

function CaptionComponent({ label, link }) {
  if (link) {
    return (
      <a href={link}>
        <p style={{ textAlign: 'center' }}>{label ?? 'File Link'}</p>
      </a>
    );
  }
  return <p style={{ textAlign: 'center' }}>{label ?? ''}</p>;
}

export default CaptionComponent;
