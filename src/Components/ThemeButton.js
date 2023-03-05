import React, { useState } from 'react'
import { ThemeContext, themes } from '../Context/ThemeContext';

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    const lm = <span className="material-symbols-outlined icon__bold">light_mode</span>; 
    const dm =  <span className="material-symbols-outlined icon__bold">dark_mode</span>;

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
                <span className='theme__toggle'>{darkMode ? dm : lm}</span>
              </button>
            )}
        </ThemeContext.Consumer>
    </>
  )
}

export default ThemeButton;