import React from "react";

import "./AdvertisingBanner.scss";

const AdvertisingBanner: React.FC = () => {
  return (
    <div className="advertising-banner">
      <a href="https://www.linkedin.com/in/anastasia-klokova-3b8048151/">
        <img
          className="advertising-banner__image"
          src="https://picsum.photos/id/1015/600/300"
          alt="banner"
        />
      </a>
    </div>
  );
};

export default AdvertisingBanner;
