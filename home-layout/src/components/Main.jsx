import React from 'react';
import './styles.css';


function Main() {
    return (
        <div className="main">
            <div className="main__header">PLEASE LOGIN ABOVE TO ACCESS THE NEW ESSILORPRO®</div>
            <hr className="main__line" />
            <div className="main__container">
                <div className="main__image-wrapper">
                    <img className="main__image" src="https://portal.essilorpro.com/assets/images/pro-welcome-landing.jpg" />
                </div>
                <div className="main__content-wrapper">
                    <h4 className="main__title">CONNECTING TO YOUR ESSILOR DASHBOARD IS EASIER THAN EVER THROUGH ESSILORPRO®!</h4>
                    <p className="main__content">Click the button below to login and access your dashboard, manage your practice information that is displayed on the EssilorUSA.com locator, and review content specifically designed to drive success for your business. If you're new to EssilorPRO®, request access today and register your account.</p>
                    <button className="main__cta">REQUEST ACCESS</button>
                </div>
            </div>
        </div>
    )
}

export default Main;