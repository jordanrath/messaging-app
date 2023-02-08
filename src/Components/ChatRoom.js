import React, { useState, useEffect } from 'react'
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
import Dashboard from './Dashboard';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const userQ = query(collection(db, "users"));

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
  });

    return (
      <main className='chat-box'>
        <Dashboard />
        <div className='message-wrapper'>
          {messages?.map((message) => (
            <Message key={message.id} message={message} users={userQ} />
          ))}
        </div>
        <SendMessage />
      </main>
    )
  }

export default ChatRoom;
