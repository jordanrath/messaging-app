import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    logInWithEmailAndPassword, 
    signInWithGoogle 
} from '../Firebase';
import authStatuses from '../Defines/authStatuses';
import { AuthContext } from '../Context/AuthContext';
import Menu from './Menu';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { authStatus, setAuthStatus } = useContext(AuthContext); 

    useEffect(() => {
        if (authStatus === authStatuses.signedIn) {(navigate("/chatroom"));}
    }, [navigate, authStatus]);

  return (
    <>
    <Menu showMenu={false} />
        <div className='login'>
            <div className='login__container'>
                <form className='login__form' autoComplete='on'>
                    <input
                        type='text'
                        className='login__textbox'
                        autoComplete='on'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='E-mail Address'
                    />
                    <input 
                        type='password'
                        className='login__textbox'
                        autoComplete='on'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Password'
                    />
                </form>
                <button
                    className='login__btn'
                    onClick={() => {
                        logInWithEmailAndPassword(email, password);
                        setAuthStatus(authStatuses.signingIn);
                    }}
                >
                    Login
                </button>
                <button 
                    className='login__btn login__google'
                    onClick={() => {
                        signInWithGoogle();
                        setAuthStatus(authStatuses.signingIn);
                    }}
                >
                    <img className='icon__google' src='./icons/btn_google_light_normal_ios.svg' alt='Google Logo'/>
                    Sign in with Google  
                </button>
                <button 
                    className='login__btn login__google'
                    onClick={() => {
                        signInWithGoogle();
                        setAuthStatus(authStatuses.signingIn);
                    }}
                >
                    <div
                      id="appleid-signin"
                      data-mode="center-align"
                      data-type="sign-in"
                      data-color="black"
                      data-border="false"
                      data-border-radius="15"
                      data-width="268"
                      data-height="40"
                      data-logo-size="medium"
                      data-logo-position="15"
                      data-label-position="70"
                    ></div>
                    <img className='icon__apple' src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js" alt='Apple Logo' />
                    Sign in with Apple
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to='/register'>Register</Link> here.
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;
