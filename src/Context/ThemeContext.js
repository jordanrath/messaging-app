import { createContext} from 'react'

const themes = {
    dark: "",
    light: "light-mode"
};

const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
});

export { ThemeContext, themes };