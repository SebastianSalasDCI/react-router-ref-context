import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom';
import Navbar from '../component/Navbar';
import AuthProvider from '../context/authProvider';
import ContactUs from '../views/ContactUs/ContactUs';
import Dashboard from '../views/Dashboard/Dashboard';
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
import Profile from '../views/Profile/Profile';
import Register from '../views/Register/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export default function MainRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <div className="swicthCont">
          <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute restricted path="/login" component={Login} />
          <PublicRoute restricted path="/register" component={Register} />
          <PublicRoute path="/contactus" component={ContactUs} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
