import React, { useState } from 'react';

type AuthUser = {
  name: string,
  email: string
}

function UseState() {
  /** usestate can be null of value */
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'Vishwash',
      email: 'vishwash@example.com'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <span>user name is : {user?.name}</span> <br />
      <span>user email is : {user?.email}</span> <br />

      <button className='bg-transparent hover:bg-blue-500 text-blue-700 px-3 py-2 border border-blue-500 hover:text-white rounded-md hover:border-transparent m-2' onClick={handleLogin}>Login</button>
      <button className='bg-transparent hover:bg-pink-500 text-pink-700 px-3 py-2 border border-pink-500 hover:text-white rounded-md hover:border-transparent m-2' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UseState