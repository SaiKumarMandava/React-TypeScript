import { useState } from "react"

export const LoggedIn = ()=>{

    const [isLoggedIn,setIsLoggedIn] = useState(false)

   const handlelogin = ()=>{
    setIsLoggedIn(true)
   }
   const handlelogout = ()=>{}

   
    return(
        <div>
            <button onClick={handlelogin}>Login</button>
            <button>Logout</button>
            <div>User is {isLoggedIn?"logged in":"logged out"}</div>

        </div>
    )
}