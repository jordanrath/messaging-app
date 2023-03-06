import React from 'react'

const WelcomeMessage = () => {

  const welcomeUser = {
    displayName: 'Jordan Rath',
    photoURL: `https://lh3.googleusercontent.com/a/AEdFTp7WxzKFTixtj2Sr1l00sc9v8739tjpAfHM8Yaat=s96-c`,
    welcome: "Hello, welcome to the Chatroom!",
  }; 

  const { displayName, photoURL, welcome } = welcomeUser;

  return (
    <>
      <div
        id='welcome-message'
        className={`chat-bubble right`}
        data-aos='zoom-in-up'
        data-aos-anchor="#chat-bubble"
      >
            <img
            className='chat-bubble__left'
            src={photoURL}
            alt='user avatar'    
            />
        <div className='chat-bubble__right'>
            <p className='user-name'>{displayName}</p>
            <p className='user-message'>{welcome}</p>
        </div>
      </div>
    </>
  )
}

export default WelcomeMessage;
