import React from 'react'
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
    const [user] = useAuthState(auth);

    // {splitRegex: /(?:(?=[a-zA-Z0-9]))(?<![a-zA-Z0-9])|(?<=[a-zA-Z0-9])(?![a-zA-Z0-9])/}
    const Filter = require('bad-words'),
        filter = new Filter();
        filter.removeWords('hell', 'butt', 'poop', 'fart');
        filter.addWords('nig');
        const filteredMessage = (filter.isProfane(message.text) ? filter.clean(message.text) : message.text);

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
            <p className='user-message'>{filteredMessage}</p>
        </div>
    </div>
  )
};

export default Message;