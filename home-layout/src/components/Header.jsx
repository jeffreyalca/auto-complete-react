import React, { useState } from 'react';
import './styles/header.css';
import Login from './Login';
import LogModal from './LogModal';

function Header() {
    const [isVisible, setVisibility] = useState(false);
    const hideModal = () => setVisibility(false);

    return (
        <div className="header">
            <div className="header__stack header__stack--gray">&nbsp;</div>
            <div className="header__stack header__stack--blue">
                <div className="header__logo-wrapper">
                    <img className="header__logo" src="https://portal.essilorpro.com/assets/images/EssilorPRO_Logo_rgb.svg"></img>
                    <button className="header__mobile-cta" onClick={() => setVisibility(true)}><b>LOGIN</b></button>

                </div>
            </div>
            <div className="header__stack header__stack--gray"><Login /> </div>

            {isVisible && <LogModal hideModal={hideModal}/>}
        </div>


    )
}

export default Header;