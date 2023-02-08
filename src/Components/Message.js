import React from 'react'
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message, users }) => {
    const [user] = useAuthState(auth);

  return (
    <div
        className={`chat-bubble ${message?.uid === user?.uid ? "right" : ""}`}
    >
        {message.avatar == null ? 
            "" :
            <img
            className='chat-bubble__left'
            src={message.avatar}
            alt='user avatar'    
            />
        }
        <div className='chat-bubble__right'>
            <p className='user-name'>{message.name || users.name}</p>
            <p className='user-message'>{message.text}</p>
        </div>
    </div>
  )
}

export default Message;