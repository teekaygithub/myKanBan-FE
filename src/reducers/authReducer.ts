import { LOGIN, ERRORS, LOGOUT, AUTH_REQUEST } from "../actions/types";

export interface AuthState {
    token: object,
    isLoggedIn: boolean,
    user: any,
    loading: boolean,
    errors: any
}

const initialState: AuthState = {
    token: {},
    isLoggedIn: false,
    user: {},
    loading: false,
    errors: {}
}

export default function (state:AuthState = initialState, action: any) {
    switch (action.type) {
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