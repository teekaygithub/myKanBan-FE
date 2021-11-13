import { GET_TICKETS, POST_TICKET, ERRORS, TICKET_REQUESTING } from "./types";
import axios from 'axios';
import { headerConfig } from "./jwtUtility";

export const getTickets = async (dispatch, PID) => {
    try {
        dispatch({
            type: TICKET_REQUESTING
        });

        const res = await axios.get(
            `http://localhost:8080/api/projects/alltickets?projectIdentifier=${PID}`, 
            {headers: 
                {'Authorization': localStorage.getItem('jwt')}
            });
        
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
        dispatch({
            type: TICKET_REQUESTING
        });

        const res = await axios.post(
            `http://localhost:8080/api/projects/ticket?projectIdentifier=${PID}`, 
            newTicket, 
            {headers: 
                {'Authorization': localStorage.getItem('jwt')}
            });
        
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

export const updateTicket = async (dispatch, PID, ticket) => {
    try {
        await axios.post(
            `http://localhost:8080/api/projects/ticket?projectIdentifier=${PID}`, 
            ticket, 
            {headers: 
                {'Authorization': localStorage.getItem('jwt')}
            });
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