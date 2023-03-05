import React, { useEffect } from 'react'
import { useState } from 'react'
import { ThemeContext, themes } from './ThemeContext';

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark);

    const changeTheme = (theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('light-mode');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('light-mode');
                break;
        }
    }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider