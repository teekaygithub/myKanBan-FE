import axios from 'axios';
import { LOGIN, ERRORS } from './types';

export const loginUser =  async (dispatch, credentials) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/users/login?username=${credentials.username}&password=${credentials.password}`);
        console.log(`Login successful: ${res.data}`);
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