import React,{useContext} from 'react'
import authContext from '../../context/authContext'

export default function Dashboard() {
  const {user} = useContext(authContext)
  return (
    <div>
      <div className="userInfo bg-custom_light-tr">
        <h1>Welcome!</h1>
        <span><b>Email:</b> {user.email} </span>
      </div>
    </div>
  )
}
