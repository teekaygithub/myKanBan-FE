import { GET_TICKETS, POST_TICKET } from "../actions/types"

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
                tickets: action.payload,
                requestPending: false
            }
        case POST_TICKET:
            return {
                ...state,
                tickets: state.tickets.push(action.payload),
                requestPending: false
            }
        default:
            return state;
    }
}

export default ticketReducer;