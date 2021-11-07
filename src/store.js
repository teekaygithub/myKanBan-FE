import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers'
import thunkMiddleWare from "redux-thunk";

// const initialState = {}

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunkMiddleWare))
);

export default store;