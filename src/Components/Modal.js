import React, { useState } from 'react'
import OpenedModal from './OpenedModal';

const Modal = ({ title, name, email }) => {
    const [open, setOpen] = useState(false);

    const handleOpenedModal = event => {
        if (event) {
            console.log('some click');
        } 
            
        setOpen(false);
    }

  return (
    <>
        <button className='dashboard__btn' onClick={() => setOpen(true)}>
        <span className="material-symbols-outlined">
            account_circle
        </span>
            Account Info
        </button>
        <OpenedModal
            title={title}
            name={name}
            email={email}
            text={'Example Text'}
            open={open}
            handleOpenedModal={handleOpenedModal}
        />
    </>
  )
}

export default Modal;