import React from "react";
import "./styles/Body.css";

export default function Body() {
  return (
    <div className="body--wrapper">
      <div className=" body__header--wrapper">
        <h2 className="body__header">
          PLEASE LOGIN ABOVE TO ACCESS THE NEW ESSILORPRO&reg;
        </h2>
        <hr className="body__hr" />
      </div>
      <div className="body__content--wrapper">
        <div className="body__lContent--wrapper">
          <img
            src="https://portal.essilorpro.com/assets/images/pro-welcome-landing.jpg"
            alt=""
            width={"546px"}
          />
        </div>
        <div className="body__rContent--wrapper">
          <div className="body__rContent--innerWrapper">
            <h2 className="body__rContent__title">
              CONNECTING TO YOUR ESSILOR DASHBOARD IS EASIER THAN EVER THROUGH
              ESSILORPRO&reg;!
            </h2>
            <p className="body__rContent__text">
              Click the button below to login and access your dashboard, manage
              your practice information that is displayed on the EssilorUSA.com
              locator, and review content specifically designed to drive success
              for your business. If you're new to EssilorPRO®, request access
              today and register your account.
            </p>
            <div className="body__rContent__button--wrapper">
              <button className="body__rContent__button">REQUEST ACCESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
