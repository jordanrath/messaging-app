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
        <Menu />
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
                    Login with Google   
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
