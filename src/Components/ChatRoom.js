import React, { useState, useEffect, useRef } from 'react'
import {
  query,
  collection,
  limit,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../Firebase';
import Message from './Message';
import SendMessage from './SendMessage';
import Menu from './Menu';
import WelcomeMessage from './WelcomeMessage';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

    return (
      <div className='chatroom'>  
        <Menu showMenu={true} />
        <main className='chat-box'>
          <div className='message-wrapper'>
           <WelcomeMessage /> 
            {messages?.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
          <div ref={messagesEndRef} />
          <SendMessage />
        </main>
      </div>
    )
  };

export default ChatRoom;
