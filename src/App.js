import React from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
//import { initializeApp } from "firebase/app";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

  // initialize firebase to identify project
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp({
    apiKey: "AIzaSyC847dX9g3U1a88CHzMirwDVo4C7MS5KV4",
    authDomain: "chat-app-c682a.firebaseapp.com",
    projectId: "chat-app-c682a",
    storageBucket: "chat-app-c682a.appspot.com",
    messagingSenderId: "689858703146",
    appId: "1:689858703146:web:a22f62d9490964d7e37853",
    measurementId: "G-5P482JG917"
  });

  // create reference to auth and firestore SDK's
  const auth = firebase.auth();
  const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      
      <section>
         {user ? <LiveChat /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
