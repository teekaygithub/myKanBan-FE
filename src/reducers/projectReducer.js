import { GET_PROJECT, GET_TICKETS, POST_PROJECT, POST_TICKET, UPDATE_TICKET } from "../actions/types";

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
        case POST_TICKET:
            return {
                ...state,
                tickets: state.tickets.push(action.payload),
                requestPending: false
            }
        // case UPDATE_TICKET:
        //     let idx = state.tickets.find(x => x.id === action.payload.id);
        //     return {
        //         ...state,
        //         tickets: state.tickets[idx] = action.payload,
        //         requestPending: false
        //     }
        default:
            return state;
    }
}

export default projectReducer;