import { combineReducers, createStore } from "redux";
import { listReducer } from "./Reducer/listToDoReducer";

// const rootReducer = combineReducers(listReducer)

export const store = createStore(
    listReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)