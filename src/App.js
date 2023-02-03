import React from 'react';
//import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import LiveChat from './Pages/LiveChat';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';

  // initialize firebase to identify project
  //const app = initializeApp(firebaseConfig);
 const firebaseConfig = {
    apiKey: "AIzaSyC847dX9g3U1a88CHzMirwDVo4C7MS5KV4",
    authDomain: "chat-app-c682a.firebaseapp.com",
    projectId: "chat-app-c682a",
    storageBucket: "chat-app-c682a.appspot.com",
    messagingSenderId: "689858703146",
    appId: "1:689858703146:web:a22f62d9490964d7e37853",
    measurementId: "G-5P482JG917"
  };

  // initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore
  const db = getFirestore(app);

  // Initialize Analytics
  const analytics = getAnalytics(app);
  console.log(db, analytics)
  // create reference to auth and firestore SDK's
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const firestore = app.firestore();

function App() {

  //const [user] = useAuthState(auth);
  const [user] = onAuthStateChanged(auth);
  onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
    } else {
      //user is signed out
    }
  });

  return (
    <div className="App">
      <header>
        <h1>HI</h1>
        <SignOut />
      </header>

      <section>
         {user ? <LiveChat firestore={firestore} /> : <SignIn auth={auth} />}
      </section>
    </div>
  );
}

export default App;
