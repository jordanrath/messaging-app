import React from 'react'
import { doc, setDoc } from '@firebase/firestore'
import { db } from '../Firebase'

const WelcomeMessage = (welcomeMessage) => {

    setDoc(doc(db, 'welcome'), {
        welcomeMessage,
    });
    WelcomeMessage("hey!")
    
  return (
    <WelcomeMessage />
  )
}

export default WelcomeMessage;
