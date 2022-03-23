import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './context/user'

type childProps = {
  children: React.ReactNode
}

export const PrivateRoute = ({ children }: childProps) => {
  const { user } = useAuth()
  const location = useLocation();
  
  if (!user) return <Navigate to='/login' state={{ path: location.pathname }}/>
  
  return (
    <div>
      {children}
    </div>
  )
}