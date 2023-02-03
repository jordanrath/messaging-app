import React from 'react';
import firebase from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

const SignIn = (props) => {
    const { auth } = props;

    const googleSignIn = () => {
      //  create an instance of the Google provider object
        //const auth = getAuth();
        const provider = new GoogleAuthProvider();
        auth.signInWithPopup(auth, provider);
    }

  return (
    <>
        <button className='sign-in' onClick={googleSignIn}>Sign in with Google</button>
    </>
  )
}

export default SignIn