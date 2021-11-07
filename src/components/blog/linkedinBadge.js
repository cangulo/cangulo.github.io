import React, { useEffect } from 'react';

const LinkedInBadge = () => {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = "text/javascript"

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="large"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="angulomascarell"
      data-version="v1">
      {/* <a
        className="badge-base__link LI-simple-link"
        href="https://es.linkedin.com/in/angulomascarell?trk=profile-badge"
      /> */}
    </div>)
}

export default LinkedInBadge