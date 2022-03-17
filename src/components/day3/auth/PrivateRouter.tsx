import React from 'react';
import Login from './Login';
import { ProfileProps } from './Profile'

type PrivateProps = {
  isLoggedIn: boolean,
  Component: React.ComponentType<ProfileProps>
}

export default function PrivateRouter({isLoggedIn, Component}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Vishwash" />
  }else {
    return <Login />
  }
}
