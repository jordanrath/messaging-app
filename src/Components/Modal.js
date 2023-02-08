import React, { useState } from 'react'
import OpenedModal from './OpenedModal';

const Modal = () => {
    const [open, setOpen] = useState(false);

    const handleOpenedModal = result => {
        if (result) {
            console.log('some click');
        } 
            
        setOpen(false);
    }

  return (
    <>
        <button className='modal__btn' onClick={() => setOpen(true)}>
            OPEN
        </button>
        <OpenedModal 
            text={'Example Text'}
            open={open}
            handleOpenedModal={handleOpenedModal}
        />
    </>
  )
}

export default Modal;