import React, { createContext, useContext, useState } from "react";


type AuthProviderProps = {
  children: React.ReactNode
}

export type AuthUser = {
  username: string
}

type UserContext = {
  user: AuthUser | null,
  login: (user: AuthUser) => void,
  logout: () => void
}

const AuthContext = createContext({} as UserContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (user: AuthUser) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}