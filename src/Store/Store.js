import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as reduxForm } from "redux-form";
import createSagaMiddleWare from "redux-saga";
import { sagas } from "./Sagas/Sagas";
import { LOGIN_ACTIONS } from "./Actions/LoginActions";

const reducerTest = (state = [], action) => state;

const SessionInitialState = { uid: "" };
const sessionReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.CHECK_SESSION:
      return { ...state, ...action.payload };
    case LOGIN_ACTIONS.LOGOUT:
      return { ...state, ...SessionInitialState };
    default:
      return { ...state };
  }
};

const reducers = combineReducers({
  reducerTest,
  form: reduxForm,
  session: sessionReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(sagas);
export default store;
