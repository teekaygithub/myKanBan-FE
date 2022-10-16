import { defaultProject, Project } from "../actions/projectActions";
import { GET_ONE_PROJECT, GET_PROJECT, POST_PROJECT, PROJECT_REQUESTING } from "../actions/types";

export interface ProjectState {
    projectlist: Project[],
    lastProject: Project|null,
    loading: Boolean,
    errors: object
}

const initialState: ProjectState = {
    projectlist: [],
    lastProject: null,
    loading: false,
    errors: {}
}

const projectReducer = (state: ProjectState = initialState, action:any) => {
    switch (action.type) {
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
                loading: false
            }
        case POST_PROJECT:
            return {
                ...state,
                projectlist: [...state.projectlist, action.payload],
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