import React from 'react'

const HamburgerMenu = (props) => {
    const { menuOpen, onClick, showMenu } = props;

  return (
    <>
        {
            showMenu
            ?
            <div className="menu__toggle" onClick={onClick}>
              <div className='lineContainer'>
                <div className={menuOpen ? "lineTop spin" : "lineTop"}></div>
                <div className={menuOpen ? "lineMiddle slide-out" : "lineMiddle"}></div>
                <div className={menuOpen ? "lineBottom spin" : "lineBottom"}></div>
              </div>
            </div>
            :
            ""
        }
    </>
  )
}

export default HamburgerMenu;
