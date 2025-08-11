import { useContext } from 'react'
import { UserContext } from './userContext'

export const Users = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
   
    userContext.setUser({
      name: 'Sai Kumar',
      email: 'sai@.com'
    })
   
  }
  const handleLogout = () => {
    
    userContext.setUser(null)
   
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
      {/* <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div> */}
    </div>
  )
}