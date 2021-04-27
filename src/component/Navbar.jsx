import React,{useContext} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import authContext from '../context/authContext'

export default function MainNavbar() {

  const {auth,logOut} = useContext(authContext)

  return (
    <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
      <Navbar.Brand>ReactRouterApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" exact activeClassName="active" to="/" >Home</NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/contactus" >ContactUs</NavLink>
          {auth ?
          <>
            <NavLink className="nav-link" activeClassName="active" to="/dashboard" >Dashboard</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/profile" >Profile</NavLink>
            <NavLink className="nav-link" exact to="/" onClick={logOut} >Logout</NavLink>
          </>
          :
          <>
            <NavLink className="nav-link" activeClassName="active" to="/register" >Register</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/login" >Login</NavLink>
          </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
