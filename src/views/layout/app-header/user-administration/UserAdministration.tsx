import React from "react";
import { NavLink } from "react-router-dom";

import "./UserAdministration.scss";

const UserAdministration: React.FC = () => {
  return (
    <div className="user-administration">
      <button className="user-administration__action-button" type="button">
        Sign In
      </button>

      <NavLink className={`${false ? "frozen-link" : ""}`} to="/profile">
        <img
          className="user-administration__user-image"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="user"
        />
      </NavLink>
    </div>
  );
};

export default UserAdministration;
