import React from "react";
import Login from "./login/Login";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-upper-section__bg-gray__h-25" />
      <div className="header-middle-section__bg-blue__h-46">
        <img
          src="https://portal.essilorpro.com/assets/images/EssilorPRO_Logo_rgb.svg"
          alt=""
          className="header-logo-image__small-size header-logo-image__position-fixed"
        />
      </div>
      <Login />
    </div>
  );
}
