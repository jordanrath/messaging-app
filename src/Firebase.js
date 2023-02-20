import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
     GoogleAuthProvider,
     getAuth,
     onAuthStateChanged,
     signInWithPopup,
     signInWithEmailAndPassword,
     createUserWithEmailAndPassword,
     sendPasswordResetEmail,
     signOut,
     updateProfile,
} from "firebase/auth";
import {
     getFirestore,
     query,
     getDocs,
     collection,
     where,
     addDoc,
} from "firebase/firestore";

  // initialize firebase to identify project
  const firebaseConfig = {
    apiKey: "AIzaSyC847dX9g3U1a88CHzMirwDVo4C7MS5KV4",
    authDomain: "chat-app-c682a.firebaseapp.com",
    projectId: "chat-app-c682a",
    storageBucket: "chat-app-c682a.appspot.com",
    messagingSenderId: "689858703146",
    appId: "1:689858703146:web:a22f62d9490964d7e37853",
    measurementId: "G-5P482JG917"
  };

  // Initialize Cloud Firestore
  // Initialize Analytics
  // create reference to auth and firestore SDK's
  // Initialize Firebase Authentication and get a reference to the service
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);
  console.log(analytics)

  const googleProvider = new GoogleAuthProvider();

  // create a function to sign a user in with google
  const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
  };

  // create a function to log in with email and password
  const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert("Incorrect username or password.");
    }
  };

  // create a function to register with email and password
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password, name);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
  };

  // create a function to send a password reset link to an email address
  const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link has been sent, check your inbox!");
    } catch (err) {
        console.error(err);
        alert("Oops... there was an error.");
    }
  };

  // create a logout function
  const logout = () => {
    signOut(auth);
  };

  // listen for auth status changes
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName;
        const uid = user.uid;
        // console.log(`User ${name} ${uid} logged in: `, user)
      } else {
        console.log(`User logged out out.`)
      };
    });
  };

  // export all the functions
  export {
    auth,
    db,
    addDoc,
    collection,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    getUser,
  };
