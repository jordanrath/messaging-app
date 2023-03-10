import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../Firebase";
import Menu from "./Menu";

const Reset = () => {
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate('/reset');
    }, [user, loading, navigate]);

  return (
    <>
        <Menu showMenu={true} />
        <div className='reset'>
            <div className='reset__container'>
                <input 
                    type='text'
                    className='reset__textBox'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='E-mail Address'
                />
                <button 
                    className='reset__btn'
                    onClick={() => sendPasswordReset(email)}
                >
                    Send password reset email
                </button>
                <div>
                    Don't have an account? <Link to='/register'>Register</Link> now or head back to the <Link to='/dashboard'>Dashboard</Link>.
                </div>
            </div>
        </div>
    </>
  )
}

export default Reset;