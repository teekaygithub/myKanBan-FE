import axios from 'axios';
import { bindActionCreators } from 'redux';
import { ERRORS, GET_PROJECT, GET_TICKETS, POST_PROJECT } from './types';

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

export const postProject = async (dispatch, newProject, history) => {
    try {
        const res = await axios.post('http://localhost:8080/api/projects/addproject', newProject);
        history.push("/dashboard");
        dispatch({
            type: POST_PROJECT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        });
    }
}

export const getTickets = async (dispatch, PID) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/projects/alltickets?projectIdentifier=${PID}`);
        dispatch({
            type: GET_TICKETS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        });
    }
}