import { LOGIN, ERRORS, LOGOUT, AUTH_REQUEST } from "../actions/types";

const initialState = {
    token: {},
    isLoggedIn: false,
    user: {},
    loading: false,
    errors: {}
}

export default function(state=initialState, action) {
    switch(action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload,
                loading: false
            }
        case LOGOUT:
            return {
                ...state,
                token: {},
                isLoggedIn: false,
                user: {},
                loading: false
            }
        case ERRORS:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        default:
            return state;
    }
}