import React, { useState } from 'react'
import authContext from './authContext'

export default function AuthProvider({children}) {

  const [user, setUser] = useState({})
  const [auth, setAuth] = useState(false)
  
  const logIn = (userData) =>{
    //Here will be the login call to backend
    setUser(userData)
    setAuth(true)
  }

  const registerUser = (userData) =>{
    //Here will be the register call to backend
    setUser(userData)
    setAuth(true)
  }

  const logOut = () =>{
    setUser({})
    setAuth(false)
  }

  const ProvidedData = {
    user,
    auth,
    logIn,
    registerUser,
    logOut
  }

  return (
    <authContext.Provider
      value={ProvidedData}
    >
      {children}
    </authContext.Provider>
  )
}
