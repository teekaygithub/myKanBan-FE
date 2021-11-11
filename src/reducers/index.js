import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import ticketReducer from "./ticketReducer";

export default combineReducers ({
    userauth: authReducer,
    myprojects: projectReducer,
    mytickets: ticketReducer
});