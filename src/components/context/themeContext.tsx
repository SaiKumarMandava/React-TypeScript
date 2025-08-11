import { createContext } from "react";
import { theme } from "./theme";

type themeContextProp = {
    children : React.ReactNode
}

export const themeContext = createContext(theme)

export const ThemeContextProvider = ({children}:themeContextProp)=>{
    return <themeContext.Provider value={theme}>{children}</themeContext.Provider>

}