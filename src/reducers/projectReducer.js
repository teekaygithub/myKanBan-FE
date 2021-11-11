import { GET_ONE_PROJECT, GET_PROJECT,POST_PROJECT, PROJECT_REQUESTING } from "../actions/types";

const initialState = {
    projectlist: [],
    lastProject: {},
    loading: false,
    errors: {}
}

const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_PROJECT:
            return {
                ...state,
                projectlist: action.payload,
                loading: false
            }
        case GET_ONE_PROJECT:
            return {
                ...state,
                lastProject: action.payload,
                loading:false
            }
        case POST_PROJECT:
            return {
                ...state,
                projectlist: state.projectlist.push(action.payload),
                loading: false
            }
        case PROJECT_REQUESTING:
            return {
                ...state,
                loading: true
            }
        
        default:
            return state;
    }
}

export default projectReducer;