import React from "react";
import InputGroup from "../UI/InputGroup";
import "../styles/Login.css";

export default function Login() {
  return (
    <div className="login--wrapper">
      <div className="login__input--wrapper">
        <InputGroup
          labelName={"EMAIL ADDRESS"}
          type={"text"}
          smallText={"or Request Access"}
          className={"login__email--padding"}
        />
        <InputGroup
          labelName={"PASSWORD"}
          type={"password"}
          smallText={"Forgot Username or Password?"}
        />
        <div className="login__button--wrapper">
          <button className="login__button">LOGIN</button>
        </div>
      </div>
    </div>
  );
}
