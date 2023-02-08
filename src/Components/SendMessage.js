import React, { useState } from 'react'
import { db } from '../Firebase';
import { addDoc, collection } from '../Firebase';
import { serverTimestamp } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    // const { uid, displayName, photoURL } = auth.currentUser;
    // await 
    if(user) {
    addDoc(collection(db, "messages"), {
      text: message,
      name: user.displayName,
      avatar: user.photoURL,
      createdAt: serverTimestamp(),
      uid: user.uid,
    });
    setMessage("");
  } else {
    console.log('no user')
  }
  }) }

    return (
      <form onSubmit={(e) => sendMessage(e)} className='send-message'>
        <label htmlFor='messageInput' hidden>
          Enter Message
        </label>
        <input
          id='messageInput'
          name='messageInput'
          type='text'
          className='form-input__input'
          placeholder='type a message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
        />
        <button type='submit'>Send</button>
      </form>
    )
  }

export default SendMessage;


  // *************could also impliment a try catch
  // const sendMessage = async (e) => {
  //   const { uid, photoURL } = auth.currentUser;
  //   try {
  //       e.preventDefault();
  //       const q = query(collection(db, "messages"));
  //       const docs = await getDocs(q)
  //       if (docs.docs.length === 0) {
  //       await addDoc(collection(db, "messages"), {
  //           text: formValue,
  //           createdAt: FieldValue.serverTimestamp(),
  //           uid,
  //           photoURL,
  //       });
  //       setFormValue('');
  //       dummy.current.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   } catch (err) {
  //       console.error(err);
  //       alert("There has been an error with the message you just tried to send.")
  //   }
  // }
  