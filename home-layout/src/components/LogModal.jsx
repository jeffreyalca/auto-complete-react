import React from 'react';
import './styles/modal.css';

function LogModal(props) {
    return (
        <div className="LoginModal-wrapper">
            <div className="LoginModal">
                <div className="LoginModal__header">
                    <button className="LoginModal__cta-close" onClick={props.hideModal}>✖</button>
                    <p className="LoginModal__title">LOGIN</p>
                    <hr className="LoginModal__line" />
                    <p className="LoginModal__text">*REQUIRED FIELD</p>
                </div>
                <div className="LoginModal__body">
                    <div className="LoginModal__label">EMAIL ADDRESS*</div>
                    <input className="LoginModal__input" placeholder="Email" type="email"></input>
                    <div className="LoginModal__label">PASSWORD*</div>
                    <input className="LoginModal__input" placeholder="*******" type="password"></input>
                    <button className="LoginModal__cta">LOGIN</button>
                    <a className="LoginModal__link">FORGOT PASSWORD?</a>
                    <a className="LoginModal__link">OR REQUEST ACCESS</a>
                </div>
            </div>
        </div>
    )
}

export default LogModal;