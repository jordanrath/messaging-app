import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const SignIn = (props) => {
    const { auth } = props;

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

  return (
    <>
        <button className='sign-in' onClick={googleSignIn}>Sign in with Google</button>
    </>
  )
}

export default SignIn