import React, { useState } from 'react'
import { ThemeContext, themes } from '../Context/ThemeContext';
import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false);

    // const lm = <span className="material-symbols-outlined icon__bold">light_mode</span>; 
    // const dm =  <span className="material-symbols-outlined icon__bold">dark_mode</span>;

  return (
    <>
        <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <div
                className='theme-btn'
                onClick={() => {
                setDarkMode(!darkMode); 
                changeTheme(darkMode ? themes.dark : themes.light);
              }}>
                <Within duration={750} />
              </div>
            )}
        </ThemeContext.Consumer>
    </>
  )
}

export default ThemeButton;
