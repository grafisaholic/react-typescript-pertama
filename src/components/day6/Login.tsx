import React, { useState } from 'react'
import { useAuth } from './context/user'
import { useNavigate, useLocation } from 'react-router-dom'

type locationState = {
  path: string
}

export default function Login() {
  const [user, setUser] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();

  const { path } = location.state as locationState || '/'

  const handleLogin = () => {
    login({ username: user })
    navigate(path, { replace: true })
  }
  
  return (
    <div>
      <span className='w-full'>
        Please insert username to continue ...
      </span>
      <br />
      <label>
        <input type="text" className='border-2 m-2 px-1 py-1' autoFocus placeholder='Username' onChange={(e) => setUser( e.target.value)} />
      </label>
      <button onClick={handleLogin} className="bg-gray-400 px-4 h-9 rounded-md text-white text-sm" >Login</button>
    </div>
  )
}
