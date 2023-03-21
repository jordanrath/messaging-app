import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu';
import Logout from './Logout';
import ThemeButton from './ThemeButton';

const Menu = (props) => {
    const { showMenu } = props;
    const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className="menu">
        <div className="menu__container">
          <div className="menu__nav">
            <div className="logo" data-aos="zoom-in-down" data-aos-duration="500" data-aos-delay="100">
              The ChatRoom
            </div>
            <div className="menu__side" data-aos="zoom-in-down" data-aos-duration="500" data-aos-delay="100">
                <div className="theme-btn__container">
                  <ThemeButton />
                </div>
                <HamburgerMenu onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} showMenu={showMenu} />
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
              <li className='menu__item1'>
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
              <li className='menu__item2'>
                  <Logout
                    className='menu__btn'
                    style={{
                      top: menuOpen ? "0" : "120px",
                      transitionDelay: menuOpen ? "0.9s" : "0s",
                    }}
                  />
                <div className='menu__item__wrapper'></div>
              </li>
              <li className='menu__item3'>
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