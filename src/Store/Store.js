import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as reduxForm } from "redux-form";
import createSagaMiddleWare from "redux-saga";
import funcionPrimaria from "./Sagas/Sagas";

const reducerTest = (state = [], action) => state;

const reducers = combineReducers({ reducerTest, form: reduxForm });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(funcionPrimaria);
export default store;
