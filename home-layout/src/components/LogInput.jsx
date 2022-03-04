import React from 'react';
import './styles.css';

function LogInput(props) {
    return (
        <div className="header__Login-wrapper">
            <div className="header__Login-label">{props.label}</div>
            <input className="header__Login-input" placeholder={props.placeholder} type={props.type}></input>
            <a className="header__Login-link" href="">{props.link}</a>
        </div>
    )
}

export default LogInput;