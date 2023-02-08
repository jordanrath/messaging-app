import React, { useState, useEffect } from 'react'
import {
  query,
  collection,
  limit,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { auth, db } from '../Firebase';
import Message from './Message';
import SendMessage from './SendMessage';
//import { logout } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Dashboard from './Dashboard';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

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
            <Message key={message.id} message={message} />
          ))}
        </div>
        <SendMessage />
      </main>
    )
  }

export default ChatRoom;
