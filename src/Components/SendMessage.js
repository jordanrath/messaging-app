import React, { useState } from 'react'
import { auth, db } from '../Firebase';
import { addDoc, collection } from '../Firebase';
import { serverTimestamp } from 'firebase/firestore';

const SendMessage = () => {
  const [message, setMessage] = useState("");
  
  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");    
  }

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
          <div className='send-message__button-container'>
            <button className='send-message__button' type='submit'>Send</button>
          </div>
      </form>
    )
  }

export default SendMessage;
