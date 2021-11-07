import axios from 'axios';
import { LOGIN, ERRORS } from './types';

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

export const loginUser =  async (dispatch, credentials, history) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/users/login?username=${credentials.username}&password=${credentials.password}`);
        console.log(`Login successful: ${res.data}`);
        history.push("/")
        dispatch({
            type: LOGIN,
            payload: res.data
        });
    } catch (err) {
        console.log(`Login failure: ${err}`);
        return {
            type: ERRORS,
            payload: {}
        }
    }
}