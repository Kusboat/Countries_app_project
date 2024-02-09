import { createContext, useState } from "react";

export const ThemeContext = createContext();


 const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const toggler = () =>{        
        setTheme(prev => prev === 'light'? 'dark': 'light'  )
    }

  return (
    <ThemeContext.Provider value={{theme, toggler}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider


