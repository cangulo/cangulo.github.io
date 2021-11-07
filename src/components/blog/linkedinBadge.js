import React, { useEffect } from 'react';

function LinkedInBadge() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (<div>
    <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="large"
      data-theme="LIGHT"
      data-type="HORIZONTAL"
      data-vanity="angulomascarell"
      data-version="v1">
    </div>
  </div>)
}

export default LinkedInBadge