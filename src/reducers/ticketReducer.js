import { GET_TICKETS, POST_TICKET, TICKET_REQUESTING } from "../actions/types"

const initialState = {
    ticketlist: [],
    loading: false,
    errors: {}
}

const ticketReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_TICKETS:
            return {
                ...state,
                ticketlist: action.payload,
                loading: false
            }
        case POST_TICKET:
            return {
                ...state,
                ticketlist: [...state.ticketlist, action.payload],
                loading: false
            }
        case TICKET_REQUESTING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default ticketReducer;