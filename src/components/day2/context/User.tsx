import React, { useContext } from 'react';
import { UserContext } from './UserContext'

function User() {
  const userContext = useContext(UserContext)
  
  const handleLogin = () => {
    userContext.setUser({
      name: "Wishwash",
      email: 'wishwash@example.com'
    })
  }

  const handleLogout = () => {
    userContext.setUser(null)
  }

  return (
    <div>
      <span>user name is : {userContext.user?.name}</span> <br />
      <span>user email is : {userContext.user?.email}</span> <br />

      <button 
        className='bg-transparent hover:bg-blue-500 text-blue-700 px-3 py-2 border border-blue-500 hover:text-white rounded-md hover:border-transparent m-2' 
        onClick={handleLogin}
      >
        Login
      </button>
      <button 
        className='bg-transparent hover:bg-pink-500 text-pink-700 px-3 py-2 border border-pink-500 hover:text-white rounded-md hover:border-transparent m-2' 
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default User