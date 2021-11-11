import { GET_PROJECT,POST_PROJECT } from "../actions/types";

const initialState = {
    projectlist: [],
    loading: true,
    errors: {}
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
        
        default:
            return state;
    }
}

export default projectReducer;