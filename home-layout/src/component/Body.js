import React from "react";

export default function Body() {
  return (
    <div className="body">
      <div className=" body-container__margin-top body-header__Ymargin body-header__flex">
        <h2 className="body-header__font-layout body-header__Ymargin">
          PLEASE LOGIN ABOVE TO ACCESS THE NEW ESSILORPRO&reg;
        </h2>
        <hr className="body-hr__layout" />
      </div>
      <div className="body-content__margin body-content__flex-row body-content__margin-top">
        <div className="content-right__flex-col content-image__padding">
          <img
            src="https://portal.essilorpro.com/assets/images/pro-welcome-landing.jpg"
            alt=""
            width={"546px"}
          />
        </div>
        <div className="content-left__flex-col content-right__margin content-right__padding-outer">
          <div className="content-right__padding-inner">
            <h2 className="content-right-title__layout content-right-title__margin">
              CONNECTING TO YOUR ESSILOR DASHBOARD IS EASIER THAN EVER THROUGH
              ESSILORPRO&reg;!
            </h2>
            <p className="content-right-paragraph__layout">
              Click the button below to login and access your dashboard, manage
              your practice information that is displayed on the EssilorUSA.com
              locator, and review content specifically designed to drive success
              for your business. If you're new to EssilorPRO®, request access
              today and register your account.
            </p>
            <div className="content-right-button-wrapper__center">
              <button className="content-right-button__layout">
                REQUEST ACCESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
