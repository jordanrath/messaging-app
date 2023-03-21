import React from 'react'
import { ThemeContext, themes } from '../Context/ThemeContext';
import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"

const ThemeButton = () => {

  return (
    <>
        <ThemeContext.Consumer>
            {({ changeTheme, theme, darkMode, setDarkMode, isToggled, setToggle }) => (
              <div
                className='theme-btn'
                onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.dark : themes.light);
                console.log(theme, darkMode, isToggled);
              }}>
                <Within duration={750} toggled={isToggled} toggle={setToggle} />
              </div>
            )}
        </ThemeContext.Consumer>
    </>
  )
}

export default ThemeButton;
