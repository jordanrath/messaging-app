import React, { useState } from 'react'
import { ThemeContext, themes } from '../Context/ThemeContext';

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <>
        <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <button
              className='theme-btn'
                onClick={() => {
                  setDarkMode(!darkMode); 
                  changeTheme(darkMode ? themes.dark : themes.light);
                }}
              >
                  <span className="d-lg-none d-md-block">Switch mode</span>
              </button>
            )}
        </ThemeContext.Consumer>
    </>
  )
}

export default ThemeButton;
