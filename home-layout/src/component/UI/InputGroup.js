import React from "react";

import "../styles/InputGroup.css";

export default function InputGroup(props) {
  return (
    <div className={`input__wrapper ${props.className}`}>
      <label className="input__label">{props.labelName}*</label>
      <input type={props.type} className="input__textfield" />
      <small className="input__small">{props.smallText}</small>
    </div>
  );
}
