import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from '../Firebase';
import Menu from './Menu';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const Filter = require('bad-words'),
        filter = new Filter();

    const register = () => {
        if (filter.isProfane(name)) {
            alert("Please enter a more appropriate name")
        } else if (!name) {
            alert("Please enter name")
        } else registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading, navigate]);

  return (
    <>
        <Menu />
        <div className='register'>
            <div className='register__container'>
                <input 
                    type='text'
                    className='register__textbox'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder='Full Name'
                />
                <input 
                    type='text'
                    className='register__textbox'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='E-mail Address'
                />
                <input 
                    type='password'
                    className='register__textbox'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder='Password'
                />
                <button 
                    className='register__btn'
                    onClick={register}
                >
                    Register
                </button>
                <button
                    className='register__btn register__google'
                    onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to='/'>Login</Link> now.
                </div>
            </div>
        </div>
    </>
  )
};

export default Register;
