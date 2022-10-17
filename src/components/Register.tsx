import '../registerpage.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { iAppUser, registerUser } from '../actions/authActions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { useForm } from './useForm';

export const Register = (props: any): JSX.Element => {

    const { value: username, bind: bindUserName, reset: resetUserName } = useForm<string>("");
    const { value: fullname, bind: bindFullName, reset: resetFullName } = useForm<string>("");
    const { value: password, bind: bindPassword, reset: resetPassword } = useForm<string>("");
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const newUser: iAppUser = { username, fullname, password }

        registerUser(dispatch, newUser, props.history);
    }

    return (
        <div id="register-container">
            <div id="register-banner">
                <h1>Thank you for trying out myKanBan!</h1>
                <p>You are also welcome to use an existing guest account:</p>
                <p>Email: test@test.com</p>
                <p>Password: 1234</p>
                <div>
                    <Link to="/login">Login Page</Link>
                </div>
            </div>
            <div id="register-form">
                <h3>Create your new account</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="username"
                        placeholder='Email address'
                        {...bindUserName} />
                    <input
                        type="text"
                        name="fullname"
                        placeholder='Your name'
                        {...bindFullName} />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        {...bindPassword} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}