import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    logInWithEmailAndPassword, 
    signInWithGoogle 
} from '../Firebase';
import authStatuses from '../Defines/authStatuses';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { authStatus, setAuthStatus } = useContext(AuthContext); 

    useEffect(() => {
        console.log("aaa", authStatus)
        if (authStatus === authStatuses.signedIn) {console.log('bbb'); (navigate("/chatroom"));}
    }, [navigate, authStatus]);

  return (
    <div className='login'>
        <div className='login__container'>
            {/* <form> */}
            <input
                type='text'
                className='login__textbox'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='E-mail Address'
            />
            <input 
                type='password'
                className='login__textbox'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder='Password'
            />
            {/* </form> */}
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
  )
}

export default Login;
