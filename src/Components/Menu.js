import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);



  return (
      <div className="menu">
        <div className="menu__container">
          <div className="menu__nav">
            <div className="logo">The ChatRoom</div>
              <div className="menu__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <div className={menuOpen ? "menu__hamburger menu__open" : "menu__hamburger"}>
                <span className={menuOpen ? "lineTop spin" : "lineTop"}></span>
                <span className={menuOpen ? "lineBottom spin" : "lineBottom"}></span>
              </div>
            </div>
          </div>
          <div className="menu__overlay" style={{
            top: menuOpen ? "0" : "-100%",
            transitionDelay: menuOpen ? "0s" : "0s",
          }}></div>
        </div>
      </div>


    // <div className='menu'>
    //     <button className='menu__btn' onClick={() => {navigate('/dashboard')}}>
    //         {/* <Link to='/dashboard'></Link> */}
    //     </button>
    // </div>
  )
}

export default Menu;