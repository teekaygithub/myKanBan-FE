import axios from 'axios';
import { setRequestHeader } from './jwtUtility';
import { LOGIN, ERRORS, LOGOUT, AUTH_REQUEST } from './types';
import { API } from '../constants';
import { AppDispatch } from '../store';

export const registerUser = async (dispatch: AppDispatch, newUser:any, history:any) => {
    try {
        dispatch({
            type: AUTH_REQUEST
        });

        const res = await axios.post(`${API}api/users/register`, newUser);
        history.push("/");

        dispatch({
            type: ERRORS,
            payload: {}
        });
    } catch (err) {
        dispatch({
            type: ERRORS,
            payload: err
        });
    }
}

export interface LoginCredentials {
    username: string,
    password: string
}

export const loginUser = async (dispatch: AppDispatch, credentials: LoginCredentials) => {
    try {
        dispatch({
            type: AUTH_REQUEST
        });

        const res = await axios.post(`${API}api/users/login?username=${credentials.username}&password=${credentials.password}`);
        // Store the JWT in browser storage and the axios request header
        const token = res.data.access_token;
        localStorage.setItem("jwt", token);
        setRequestHeader(token);

        dispatch({
            type: LOGIN,
            payload: token
        });
    } catch (err) {
        console.log(`Login failure: ${err}`);
        dispatch({
            type: ERRORS,
            payload: { err }
        });
    }
}

export const logoutUser = (dispatch: AppDispatch) => {
    localStorage.removeItem("jwt");
    setRequestHeader("");
    dispatch({
        type: LOGOUT
    });
}