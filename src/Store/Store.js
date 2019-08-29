import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as reduxForm } from "redux-form";

const reducerTest = (state = [], action) => state;

const reducers = combineReducers({ reducerTest, form: reduxForm });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers());

export default store;
