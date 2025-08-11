import { themeContext } from "./themeContext"
import { useContext } from "react"
export const Box =()=>{
    const theme = useContext(themeContext)
    return(
        <div style={{backgroundColor:theme.primary.main, color:theme.primary.text,margin:theme.primary.margin,padding:theme.primary.padding}}>
            Theme Context
        </div>
    )
}