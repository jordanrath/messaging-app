import React from 'react'
import { logout } from "../Firebase";

const OpenedModal = ({ text, open, handleOpenedModal, title, name, email }) => {

  return (
    <>
        <div className={open ? 'open modal__open' : 'open'}>
            <div className='modal__content'>
                <h4>{title}</h4>
                <div>
                    {/* <h2>{title}</h2> */}
                    <p>Username: {name}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
            <div className='modal__btns'>
                <button className="left" onClick={() => handleOpenedModal(true)}>DASHBOARD</button>
                <button className="right" onClick={logout}>LOGOUT</button>
            </div>
        </div>
        {/* <div
            className='overlay'
            onClick={handleOpenedModal(false)}
        /> */}
    </>
  )
}

export default OpenedModal