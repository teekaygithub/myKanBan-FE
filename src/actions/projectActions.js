import axios from 'axios';
import { bindActionCreators } from 'redux';
import { ERRORS, GET_PROJECT } from './types';

export const getProjects = async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:8080/api/projects/all');
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        });
    }
}