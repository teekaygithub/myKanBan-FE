import axios from 'axios';
import { ERRORS, GET_ONE_PROJECT, GET_PROJECT, POST_PROJECT, PROJECT_REQUESTING } from './types';
import { API } from '../constants';

export const getProjects = async (dispatch) => {
    try {
        dispatch({
            type: PROJECT_REQUESTING
        });

        const res = await axios.get(
            `${API}api/projects/all`, 
            {headers: 
                {'Authorization': localStorage.getItem('jwt')}
            });
        await new Promise(r => setTimeout(r, 2000)); // Simulated latency
        
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

        const res = await axios.get(
            `${API}api/projects/project?projectIdentifier=${PID}`, 
            {headers: 
                {'Authorization': localStorage.getItem('jwt')}
            });
        console.log(res);
        await new Promise(r => setTimeout(r, 2000));

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

        const res = await axios.post(
            `${API}api/projects/addproject`, 
            newProject, 
            {headers: 
                {'Authorization': localStorage.getItem('jwt')}
            });
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
