import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as reduxForm } from "redux-form";
import createSagaMiddleWare from "redux-saga";
import { sagas } from "./Sagas/Sagas";
import { LOGIN_ACTIONS } from "./Actions/LoginActions";
import { REGISTER_ACTIONS } from "./Actions/RegisterActions";
import { ADD_PICTURES_ACTIONS } from "./Actions/AddPictureActions";

const reducerTest = (state = [], action) => state;

const SessionInitialState = { uid: "" };
const sessionReducer = (state = SessionInitialState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.CHECK_SESSION:
      return { ...state, ...action.payload };
    case LOGIN_ACTIONS.LOGOUT:
      return { ...SessionInitialState };
    default:
      return { ...state };
  }
};

const imageSignUpReducer = (state = { image: null }, action) => {
  switch (action.type) {
    case REGISTER_ACTIONS.UPLOAD_IMAGE:
      return { ...state, image: action.payload };
    case REGISTER_ACTIONS.CLEAR_IMAGE:
      return { ...state, image: null };
    default:
      return { ...state };
  }
};

const publicationImageReducer = (state = { image: null }, action) => {
  switch (action.type) {
    case ADD_PICTURES_ACTIONS.UPLOAD_IMAGE:
      return { ...state, image: action.payload };
    case ADD_PICTURES_ACTIONS.CLEAR_IMAGE:
      return { ...state, image: null };
    default:
      return { ...state };
  }
};

const reducers = combineReducers({
  reducerTest,
  form: reduxForm,
  session: sessionReducer,
  signUpImage: imageSignUpReducer,
  publicationImage: publicationImageReducer
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
