import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers'
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const initialState = {}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;