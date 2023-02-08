import React from 'react'

const OpenedModal = ({ text, open, handleOpenedModal }) => {
  return (
    <>
        <div className={open ? 'open modal__open' : 'open'}>
            <div className='modal__content'>
                <h4>Test Header</h4>
                <div>
                    <h2>{text}</h2>
                    <p>Test paragraph</p>
                </div>
            </div>
            <div className='modal__btns'>
                <button onClick={() => handleOpenedModal(true)}>BACK TO CHAT</button>
                <button onClick={() => handleOpenedModal(false)}>LOGOUT/SOMETHING ELSE</button>
            </div>
        </div>
        <div
            className='overlay'
            onClick={handleOpenedModal(false)}
        />
    </>
  )
}

export default OpenedModal