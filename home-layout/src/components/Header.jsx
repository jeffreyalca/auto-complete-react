import React from 'react';
import './styles.css';
import Login from './Login';

function Header() {
    return (
        <div className="header">
            <div className="header__stack header__stack--gray">&nbsp;</div>
            <div className="header__stack header__stack--blue">
                <div className="header__logo-wrapper">
                    <img className="header__logo" src="https://portal.essilorpro.com/assets/images/EssilorPRO_Logo_rgb.svg"></img>
                </div>
            </div>
            <div className="header__stack header__stack--gray"><Login /> </div>
        </div>
    )
}

export default Header;