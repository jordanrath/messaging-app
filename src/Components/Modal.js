import React, { useState } from 'react'
import OpenedModal from './OpenedModal';

const Modal = () => {
    const [open, setOpen] = useState(false);

    const handleOpenedModalClick = event => {
        if (event) {
            console.log('some click');
        }

        setOpen(false);
    }

  return (
    <>
        <div>
            <button className='modal__btn' onClick={() => setOpen(true)}>OPEN</button>
        </div>
        <OpenedModal 
            text={'Example Text'}
            open={open}
            handleOpenedModalClick={handleOpenedModalClick}
        />
    </>
  )
}

export default Modal