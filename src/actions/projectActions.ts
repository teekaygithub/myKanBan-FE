import axios from 'axios';
import { ERRORS, GET_ONE_PROJECT, GET_PROJECT, POST_PROJECT, PROJECT_REQUESTING } from './types';
import { API } from '../constants';
import { AppDispatch } from '../store';

export const getProjects = async (dispatch: AppDispatch) => {
    try {
        dispatch({
            type: PROJECT_REQUESTING
        });

        const res = await axios.get(
            `${API}api/projects/all`,
            {
                headers:
                    { 'Authorization': localStorage.getItem('jwt') || "" }
            });
        // await new Promise(r => setTimeout(r, 2000)); // Simulated latency

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

export const getOneProject = async (dispatch: AppDispatch, PID:string) => {
    try {
        dispatch({
            type: PROJECT_REQUESTING
        });

        const res = await axios.get(
            `${API}api/projects/project?projectIdentifier=${PID}`,
            {
                headers:
                    { 'Authorization': localStorage.getItem('jwt') || "" }
            });

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

export interface iProject {
    title: string,
    description?: string,
    projectIdentifier: string,
    id: string
}

export const defaultProject ={
    title: "",
    description: "",
    projectIdentifier: "",
    id: 0
}

export const postProject = async (dispatch: AppDispatch, newProject: iProject) => {
    try {
        dispatch({
            type: PROJECT_REQUESTING
        });

        const res = await axios.post(
            `${API}api/projects/addproject`,
            newProject,
            {
                headers:
                    { 'Authorization': localStorage.getItem('jwt') || "" }
            });

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
