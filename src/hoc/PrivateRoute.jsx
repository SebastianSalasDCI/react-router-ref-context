import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import authContext from '../context/authContext'

export default function PrivateRoute({path, component:Component,...rest}) {
  //check login
  const {auth:login} = useContext(authContext)
  
  return (
    <Route  path={path} {...rest} >
      { login ?
        <Component />
        : <Redirect to="/login" />
      }
    </Route>
  )
}
