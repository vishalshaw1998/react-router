import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { timelineReducer, todoReducer } from "./reducers/reducers";

const reducer = combineReducers({
    posts: timelineReducer,
    todos: todoReducer,
});

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
