import axios from 'axios';
import { ERRORS, GET_ONE_PROJECT, GET_PROJECT, POST_PROJECT, PROJECT_REQUESTING } from './types';
import { headerConfig } from './jwtUtility';

export const getProjects = async (dispatch) => {
    try {
        dispatch({
            type: PROJECT_REQUESTING
        });

        const res = await axios.get('http://localhost:8080/api/projects/all', headerConfig);
        await new Promise(r => setTimeout(r, 5000)); // Simulated latency
        
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

export const getOneProject = async (dispatch, PID) => {
    try {
        dispatch({
            type: PROJECT_REQUESTING
        });

        const res = await axios.get(`http://localhost:8080/api/projects/project?projectIdentifier=${PID}`, headerConfig);
        console.log(res);
        await new Promise(r => setTimeout(r, 5000));

        dispatch({
            type: GET_ONE_PROJECT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ERRORS,
            payload: err
        });
    }
}

export const postProject = async (dispatch, newProject, history) => {
    try {
        dispatch({
            type: PROJECT_REQUESTING
        });

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
