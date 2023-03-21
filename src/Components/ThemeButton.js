import React, { useEffect, useState } from 'react'
import { ThemeContext, themes } from '../Context/ThemeContext';
import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"

const ThemeButton = () => {
    //const [darkMode, setDarkMode] = useState(false);
    // const [isToggled, setToggle] = useState(false);
    // const {theme} = ThemeContext;
    // const [theme, setTheme] = useState(themes.dark);
    
    //  useEffect(() => {
    //    setDarkMode(JSON.parse(window.sessionStorage.getItem('darkMode')))
    //  }, [])
    //  useEffect(() => {
    //    window.sessionStorage.setItem('darkMode', darkMode);
    //  })  

    // useEffect(() => {
    //   setTheme(darkMode ? themes.dark : themes.light)
    // }, [darkMode])


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
