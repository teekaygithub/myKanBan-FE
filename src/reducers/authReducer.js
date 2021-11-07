import { LOGIN, ERRORS } from "../actions/types";

const initialState = {
    token: {},
    isLoggedIn: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload
            }
        case ERRORS:
        default:
            return state;
    }
}