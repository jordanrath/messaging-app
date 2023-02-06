import React, { useRef, useState } from 'react'
import ChatMessage from './ChatMessage';
import { auth, collection, addDoc, db } from './Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FieldValue, getDocs, query } from 'firebase/firestore';

const Chatroom = () => {
    const dummy = useRef();
    //const messagesRef = db.collection('messages');
    //const query = messagesRef.orderBy('createdAt').limit(25);
  
    //const [messages] = useCollectionData(query, { idField: 'id' });
    //const [messages] = query(collection(db, "messages"));
  
    const [formValue, setFormValue] = useState('');
  
    // const q = query(collection(db, "users"), where("uid", "==", user.uid));
    // const docs = await getDocs(q);
    // try {
    //   const res = await signInWithPopup(auth, googleProvider);
    //   const user = res.user;
    //   const q = query(collection(db, "users"), where("uid", "==", user.uid));
    //   const docs = await getDocs(q);
    //   if (docs.docs.length === 0) {
    //       await addDoc(collection(db, "users"), {
    //           uid: user.uid,
    //           name: user.displayName,
    //           authProvider: "google",
    //           email: user.email,
    //       });

    const sendMessage = async (e) => {
        const { uid, photoURL } = auth.currentUser;
        try {
            e.preventDefault();
            const q = query(collection(db, "messages"));
            const docs = await getDocs(q)
            if (docs.docs.length === 0) {
            await addDoc(collection(db, "messages"), {
                text: formValue,
                createdAt: FieldValue.serverTimestamp(),
                uid,
                photoURL,
            });
            setFormValue('');
            dummy.current.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {
            console.error(err);
            alert("There has been an error with the message you just tried to send.")
        }
      }
      
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)
  }

export default Chatroom
