import React from "react";

export default function InputGroup(props) {
  return (
    <div className={`header-login__flex-column ${props.className}`}>
      <label className="header-login-label__font-style">
        {props.labelName}*
      </label>
      <input type={props.type} className="header-login-input-text__size" />
      <small className="header-login-small__color-blue">
        {props.smallText}
      </small>
    </div>
  );
}
