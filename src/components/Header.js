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
    this.props.history.push("/login");
  }

  render() {
    const privateHeader = (
      <>
        <Link to="/dashboard">Dashboard</Link>
        <a href="" onClick={this.handleLogout} >Log Out</a>
      </>
    );

    const publicHeader = (
      <>
        <Link to="/login">Log In</Link>
        <Link to="/register" id="register-button" >Register</Link>
      </>
    );

    let presentation = this.props.userauth.isLoggedIn ? privateHeader : publicHeader;
    return(
      <div className="header-bar">
        <Link to="/" className="logo" >HOME</Link>
        <div className="header-menu" >
          {presentation}
        </div>
      </div>
    );
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