import React from 'react'
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
    const [user] = useAuthState(auth);

  return (
    <div
        id='chat-bubble'
        className={`chat-bubble ${message?.uid === user?.uid ? "right" : ""}`}
        data-aos='zoom-in-up'
        data-aos-anchor="#chat-bubble"
    >
        {message.avatar == null ? 
            <span className="material-symbols-outlined user-avatar">
                account_circle
            </span> :
            <img
            className='chat-bubble__left'
            src={message.avatar}
            alt='user avatar'    
            />
        }
        <div className='chat-bubble__right'>
            <p className='user-name'>{message.name || "User"}</p>
            <p className='user-message'>{message.text}</p>
        </div>
    </div>
  )
};

export default Message;