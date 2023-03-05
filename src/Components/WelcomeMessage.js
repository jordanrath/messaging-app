import { serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { addDoc, collection, db } from '../Firebase'

const WelcomeMessage = async () => {

  const welcomeUser = {
    displayName: 'Jordan Rath',
    photoURL: `https://lh3.googleusercontent.com/a/AEdFTp7WxzKFTixtj2Sr1l00sc9v8739tjpAfHM8Yaat=s96-c`,
    welcome: "Hello, welcome to the Chatroom!",
  };

  const welcome = "Hello, welcome to the Chatroom!";
  const { displayName, photoURL } = welcomeUser;
  await addDoc(collection(db, "welcome"), {
    text: welcome,
    name: displayName,
    avatar: photoURL,
    createdAt: serverTimestamp(),
  }, []);   

  return (
    <>
      <div
        id='chat-bubble'
        className={`chat-bubble right`}
        data-aos='zoom-in-up'
        data-aos-anchor="#chat-bubble"
      >
        {photoURL == null ? 
            <span className="material-symbols-outlined user-avatar">
                account_circle
            </span> :
            <img
            className='chat-bubble__left'
            src={photoURL}
            alt='user avatar'    
            />
        }
        <div className='chat-bubble__right'>
            <p className='user-name'>{displayName|| "User"}</p>
            <p className='user-message'>{welcome}</p>
        </div>
      </div>
    </>
  )
}

export default WelcomeMessage;
