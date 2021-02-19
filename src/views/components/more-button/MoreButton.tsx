import React from "react";

import "./MoreButton.scss";

const MoreButton: React.FC = () => {
  return (
    <div className="more-button-wrapper">
      <button className="more-button-wrapper__action-button" type="button">
        <div className="more-button-wrapper__action-button__label">
          Read More
        </div>
        <img
          className="more-button-wrapper__action-button__icon"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="more"
        />
      </button>
    </div>
  );
};

export default MoreButton;
