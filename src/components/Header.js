import { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const publicHeader = (
      <nav className="navbar bg-dark">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/projects">Projects</Link>
          </li>
          <li className='nav-item'>
            <a href="" >Log Out</a>
          </li>
        </ul>
      </nav>
    );

    const privateHeader = (
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
    let presentation = this.props.userauth.isLoggedIn ? privateHeader : publicHeader
    return(presentation);
  }
}

Header.propTypes = {
  userauth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  userauth: state.userauth
});

export default connect(mapStateToProps, null)(Header);