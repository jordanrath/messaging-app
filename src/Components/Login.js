import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    auth, 
    getUser, 
    logInWithEmailAndPassword, 
    signInWithGoogle 
} from '../Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    // const handleLoginClick = () => {

    //     try {
    //         if (user || loading)
    //         navigate("/chatroom")
    //     } catch (err) {
    //         console.error(err);
    //         alert("An error occurred fetching user data");
    //     }
    // };

    useEffect(() => {
        if (loading) {
            //trigger loading screen
            console.log('loading')
            // return;
        }
        if (user) {console.log('user');(navigate("/chatroom")); getUser()}
    }, [user, loading, login, navigate]);

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
                onClick={() => {logInWithEmailAndPassword(email, password);}}
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
