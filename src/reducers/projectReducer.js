import { GET_PROJECT, GET_TICKETS, POST_PROJECT } from "../actions/types";

const initialState = {
    projectlist: [],
    tickets: [],
    requestPending: true
}

const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_PROJECT:
            return {
                ...state,
                projectlist: action.payload,
                requestPending: false
            }
        case POST_PROJECT:
            return {
                ...state,
                projectlist: state.projectlist.push(action.payload),
                requestPending: false
            }
        case GET_TICKETS:
            return {
                ...state,
                tickets: action.payload,
                requestPending: false
            }
        default:
            return state;
    }
}

export default projectReducer;