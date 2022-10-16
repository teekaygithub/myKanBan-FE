import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import logo from "../mykanbanlogo.png";
import { AppDispatch, AppState } from '../store';
import { AuthState } from '../reducers/authReducer';

export const Header = () => {

  const userauth: AuthState = useSelector((state: AppState) => state.userauth);
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    logoutUser(dispatch);
    history.push("/login");
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