import '../registerpage.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { AppUser, registerUser } from '../actions/authActions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
// import { useForm } from './useForm';

export const Register = (props: any): JSX.Element => {

    const [username, setUsername] = useState("");
    const [fullname, setFullName] = useState("");
    const [password, setPassWord] = useState("");
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const newUser: AppUser = { username, fullname, password }

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
                        onChange={(e) => { setUsername(e.target.value) }}
                        value={username} />
                    <input
                        type="text"
                        name="fullname"
                        placeholder='Your name'
                        onChange={(e) => { setFullName(e.target.value) }}
                        value={fullname} />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        onChange={(e) => { setPassWord(e.target.value) }}
                        value={password} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}