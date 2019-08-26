import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const reducerTest = (state = [], action) => state;

const reducers = combineReducers({ reducerTest });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers());

export default store;
