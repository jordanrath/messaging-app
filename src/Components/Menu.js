import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className="menu">
        <div className="menu__container">
          <div className="menu__nav">
            <div className="logo">The ChatRoom</div>
              <div className="menu__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <div className='lineContainer'>
                  <div className={menuOpen ? "lineTop spin" : "lineTop"}></div>
                  <div className={menuOpen ? "lineMiddle slide-out" : "lineMiddle"}></div>
                  <div className={menuOpen ? "lineBottom spin" : "lineBottom"}></div>
                </div>
              </div>
            </div>
          <div 
            className="menu__overlay" 
            style={{
              top: menuOpen ? "0px" : "-120%",
              transitionDelay: menuOpen ? "0s" : "0s",
            }}
          >
            <ul className='menu__links'>
              <li className='menu__item'>
                <Link
                  to='/dashboard'
                  onClick={() => setMenuOpen(!menuOpen)}
                  style={{
                    top: menuOpen ? "0" : "120px",
                    transitionDelay: menuOpen ? "0.8s" : "0s",
                  }}
                >
                  Account Dashboard
                </Link>
                <div className='menu__item__wrapper'></div>
              </li>
              <li className='menu__item'>
                  <Logout
                    className='menu__btn'
                    style={{
                      top: menuOpen ? "0" : "120px",
                      transitionDelay: menuOpen ? "0.9s" : "0s",
                    }}
                  />
                <div className='menu__item__wrapper'></div>
              </li>
              <li className='menu__item'>
                  <Link
                    className='menu__btn'
                    to='/contact'
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                      top: menuOpen ? "0" : "120px",
                      transitionDelay: menuOpen ? "1s" : "0s",
                    }}
                  >
                    Contact
                  </Link>
                <div className='menu__item__wrapper'></div>              
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Menu;