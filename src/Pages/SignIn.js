import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = (props) => {
    const { auth } = props;

    const googleSignIn = () => {
      //  create an instance of the Google provider object
        const provider = new GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

  return (
    <>
        <button className='sign-in' onClick={googleSignIn}>Sign in with Google</button>
    </>
  )
}

export default SignIn