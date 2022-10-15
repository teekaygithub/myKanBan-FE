import { loginUser, LoginCredentials } from '../actions/authActions';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from './useForm';
import { Redirect } from 'react-router-dom';
import { Spinner } from './Spinner';
import React from 'react';
import { AppDispatch, AppState } from '../store';
import { AuthState } from '../reducers/authReducer';

export const Login = () => {
    const { value: userName, bind: bindUserName, reset: resetUserName } = useForm('');
    const { value: passWord, bind: bindPassWord, reset: resetPassWord } = useForm('');
    const userauth: AuthState = useSelector((state: AppState) => state.userauth);
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();

        const credentials: LoginCredentials = {
            username: userName,
            password: passWord
        }

        loginUser(dispatch, credentials);

        if (userauth.isLoggedIn && !userauth.loading && Object.keys(userauth.errors).length == 0) {
            resetUserName();
            resetPassWord();
        }
    }

    const loginForm = (
        <div id="login-container">
            <div id="login-banner">
                <h3>Thank you for trying out myKanBan!</h3>
                <p>Feel free to register for an account, or use the following credential below:</p>
                <p>User e-mail address: <strong>test@test.com</strong></p>
                <p>Password: <strong>1234</strong></p>
            </div>

            <div id="login-form">
                <h3>Log In to MyKanBan</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="username"
                        placeholder='Email Address'
                        {...bindUserName}
                        required />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        {...bindPassWord}
                        required />
                    {Object.keys(userauth.errors).length > 0 ? <p id="login-error">Invalid username and password combination</p> : <></>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );

    return (
        <>
            {userauth.isLoggedIn ? <Redirect to="/"></Redirect> : loginForm}
            {userauth.loading ? <Spinner></Spinner> : <></>}
        </>
    );
}