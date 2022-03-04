import React from "react";
import InputGroup from "../UI/InputGroup";

export default function Login() {
  return (
    <div className="header-bottom-section__bg-gray__h-87">
      <div className="header-login__flex-row header-login__margin__padding">
        <InputGroup
          labelName={"EMAIL ADDRESS"}
          type={"text"}
          smallText={"or Request Access"}
          className={"header-login__padding-left"}
        />
        <InputGroup
          labelName={"PASSWORD"}
          type={"password"}
          smallText={"Forgot Username or Password?"}
        />
        <div className="header-login-button__padding">
          <button className="button__color-blue header-login-button__size">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
