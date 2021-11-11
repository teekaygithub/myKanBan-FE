import axios from 'axios';
import { ERRORS, GET_PROJECT, POST_PROJECT } from './types';
import { headerConfig } from './jwtUtility';

export const getProjects = async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:8080/api/projects/all', headerConfig);
        // await new Promise(r => setTimeout(r, 5000));
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ERRORS,
            payload: err
        });
    }
}

export const postProject = async (dispatch, newProject, history) => {
    try {
        const res = await axios.post('http://localhost:8080/api/projects/addproject', newProject, headerConfig);
        history.push("/dashboard");
        dispatch({
            type: POST_PROJECT,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ERRORS,
            payload: err
        });
    }
}
