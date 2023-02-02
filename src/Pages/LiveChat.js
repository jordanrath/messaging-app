import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import LiveMessage from './LiveMessage';

const LiveChat = (props) => {
    const { firestore } = props; 
    // make reference for each message as well as query for subset of documents
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);

    // make query and listen for updates
    const [messages] = useCollectionData(query, {idField: 'id'});

  return (
    <div>
        {messages && messages.map(msg => <LiveMessage key={msg.id} message={msg} />)}


    </div>
  )
}

export default LiveChat