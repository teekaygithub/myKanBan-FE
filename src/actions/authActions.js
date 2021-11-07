import axios from 'axios';
import { setRequestHeader } from './jwtUtility';
import { LOGIN, ERRORS, LOGOUT } from './types';

export const registerUser = async (dispatch, newUser, history) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/users/register`, newUser);
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
        const res = await axios.post(`http://localhost:8080/api/users/login?username=${credentials.username}&password=${credentials.password}`);
        // Store the JWT in browser storage and the axios request header
        const token = "Bearer " + res.data.access_token;
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