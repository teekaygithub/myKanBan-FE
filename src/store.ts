import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers'
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const initialState = {}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;