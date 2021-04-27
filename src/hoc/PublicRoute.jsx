import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import authContext from '../context/authContext'

export default function PublicRoute({path, component:Component, restricted,...rest}) {
  
  //check login
  const {auth:login} = useContext(authContext)

  return (
    <Route  path={path} {...rest} >
      { login && restricted ?
        <Redirect to="/dashboard" />
        : <Component />
      }
    </Route>
  )
}
