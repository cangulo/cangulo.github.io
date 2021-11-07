import React, { useEffect } from 'react';

// References:
// https://stackoverflow.com/a/67679563/17349462
// https://stackblitz.com/edit/react-bukvrx?file=src%2FApp.js
// How to create a badge ?
// https://www.linkedin.com/badges/profile/create?vanityname=angulomascarell&preferredlocale=en_US&trk=public_profile-settings_badge

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