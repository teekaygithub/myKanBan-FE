import axios from 'axios';
import { ERRORS, GET_PROJECT, GET_TICKETS, POST_PROJECT, POST_TICKET } from './types';
import { headerConfig } from './jwtUtility';

export const getProjects = async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:8080/api/projects/all', headerConfig);
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

export const getTickets = async (dispatch, PID) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/projects/alltickets?projectIdentifier=${PID}`, headerConfig);
        dispatch({
            type: GET_TICKETS,
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

export const postTicket = async(dispatch, PID, newTicket) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/projects/ticket?projectIdentifier=${PID}`, newTicket, headerConfig);
        dispatch({
            type: POST_TICKET,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ERRORS,
            payload: err
        });
    }
}