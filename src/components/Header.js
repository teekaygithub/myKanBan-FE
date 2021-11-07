import { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    const privateHeader = (
      <nav className="navbar bg-dark">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className='nav-item'>
            <a href="" onClick={this.handleLogout} >Log Out</a>
          </li>
        </ul>
      </nav>
    );

    const publicHeader = (
      <nav className="navbar bg-dark">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/register">Register</Link>
          </li>
          <li className='nav-item'>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
    );
    let presentation = this.props.userauth.isLoggedIn ? privateHeader : publicHeader;
    return(presentation);
  }
}

Header.propTypes = {
  userauth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  userauth: state.userauth
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => logoutUser(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);