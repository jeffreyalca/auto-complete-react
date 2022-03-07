import React from 'react';
import LogInput from './LogInput';

function Login() {
    return (
        <form className="header__Login">
            <LogInput
                label="EMAIL ADDRESS*"
                placeholder="Email"
                type="email"
                link="or Request Access"
            />
            <LogInput
                label="PASSWORD*"
                placeholder="*******"
                type="password"
                link="Forgot Username or Password"
            />
            <button className="header__cta">
                LOGIN
            </button>
        </form>
    )
}

export default Login;