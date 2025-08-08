import { useState } from "react"

type AuthUser = {
    name:string
    email:string
}
export const User = ()=>{

     const [user,setUser] = useState<AuthUser | null>(null)
    
       const handlelogin = ()=>{
        setUser({
            name:"Sai",
            email:"sai@gmail.com"
        })
       }
       const handlelogout = ()=>{
        setUser(null)
       }
    return(
        <div>
            <button onClick={handlelogin}>Login</button>
            <button onClick={handlelogout}>Logout</button>
            <div>User name {user?.name}</div>
            <div>User email {user?.email}</div>

        </div>
    )
}