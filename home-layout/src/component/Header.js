import React from "react";
import Login from "../component/login/Login";
import "./styles/Header.css";

export default function Header() {
  return (
    <div className="header--wrapper">
      <div className="header__upper" />
      <div className="header__middle">
        <img
          src="https://portal.essilorpro.com/assets/images/EssilorPRO_Logo_rgb.svg"
          alt=""
          className="header__image"
        />
      </div>
      <Login />
    </div>
  );
}
