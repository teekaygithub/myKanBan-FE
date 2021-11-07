import { GET_PROJECT } from "../actions/types";

const initialState = {
    projectlist: []
}

const projectReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_PROJECT:
            return {
                ...state,
                projectlist: action.payload
            }
        default:
            return state;
    }
}

export default projectReducer;