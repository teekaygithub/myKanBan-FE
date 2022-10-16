import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import logo from "../mykanbanlogo.png";

export const Header = (props) => {

  const userauth = useSelector((state) => state.userauth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutUser(dispatch);
    props.history.push("/login");
  }

  const privateHeader = (
    <>
      <Link to="/dashboard">Dashboard</Link>
      <a href="" onClick={handleLogout} >Log Out</a>
    </>
  );

  const publicHeader = (
    <>
      <Link to="/login">Log In</Link>
      <Link to="/register" id="register-button" >Register</Link>
    </>
  );

  let presentation = userauth.isLoggedIn ? privateHeader : publicHeader;

  return (
    <div className="header-bar">
      <Link to="/" id="logo" >
        <img src={logo}></img>
      </Link>
      <div className="header-menu" >
        {presentation}
      </div>
    </div>
  );
}