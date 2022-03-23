import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/user'

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div>
      <div>Welcome {user?.username}</div>
      <button onClick={handleLogout} className="bg-gray-400 px-4 h-9 rounded-md text-white text-sm" >Logout</button>
    </div>
  )
}
