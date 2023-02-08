import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    auth, 
    logInWithEmailAndPassword, 
    signInWithGoogle 
} from '../Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            //trigger custom loading screen
            return;
        }
        if (user) navigate("/chatroom");
    }, [user, loading, navigate]);

  return (
    <div className='login'>
        <div className='login__container'>
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
            <button
                className='login__btn'
                onClick={() => logInWithEmailAndPassword(email, password)}
            >
                Login
            </button>
            <button 
                className='login__btn login__google'
                onClick={signInWithGoogle}
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
