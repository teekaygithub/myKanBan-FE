import axios from 'axios';
import { setRequestHeader } from './jwtUtility';
import { LOGIN, ERRORS, LOGOUT, AUTH_REQUEST } from './types';
import { API } from '../constants';

export const registerUser = async (dispatch, newUser, history) => {
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

export const loginUser =  async (dispatch, credentials) => {
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
        return {
            type: ERRORS,
            payload: {}
        }
    }
}

export const logoutUser = (dispatch) => {
    localStorage.removeItem("jwt");
    setRequestHeader(false);
    dispatch({
        type: LOGOUT
    });
}