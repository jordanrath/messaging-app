import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Firebase';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const navigate = useNavigate();

    const handleMouseEnter = (id) => {
      setIsHover({hover: id});
    };

    const handleMouseLeave = () => {
      setIsHover({hover: null});
    };

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
          <div 
            className="menu__overlay" 
            style={{
              top: menuOpen ? "0" : "-100%",
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
                    // color: isHover === "0" ? "#3665EB" : "#fff",
                  }}
                >
                  Account Dashboard
                </Link>
                <div className='menu__item__wrapper'></div>
              </li>
              <li className='menu__item'>
                  <button
                    className='menu__btn'
                    onClick={() => {logout(); navigate('/');}}
                    style={{
                      top: menuOpen ? "0" : "120px",
                      transitionDelay: menuOpen ? "0.9s" : "0s",
                      // color: isHover === "1" ? "#3665EB" : "#fff",
                    }}
                  >
                    Logout
                  </button>
                <div className='menu__item__wrapper'></div>
              </li>
              <li className='menu__item'>
                  <button
                    className='menu__btn'
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                      top: menuOpen ? "0" : "120px",
                      transitionDelay: menuOpen ? "1s" : "0s",
                      // color: isHover === "2" ? "#3665EB" : "#fff",
                    }}
                  >
                    Contact
                  </button>
                <div className='menu__item__wrapper'></div>              
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Menu;