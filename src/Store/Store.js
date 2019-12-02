import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as reduxForm } from "redux-form";
import createSagaMiddleWare from "redux-saga";
import { sagas } from "./Sagas/Sagas";
import { LOGIN_ACTIONS } from "./Actions/LoginActions";
import { REGISTER_ACTIONS } from "./Actions/RegisterActions";
import { ADD_PICTURES_ACTIONS } from "./Actions/AddPictureActions";
import { HOME_ACTIONS } from "./Actions/HomeActions";

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

const homeFeedPublications = (state = { feed: [], authors: [] }, action) => {
  switch (action.type) {
    case HOME_ACTIONS.SET_HOME_FEED:
      return { ...state, feed: action.payload };
    case HOME_ACTIONS.SET_HOME_FEED_AUTHORS:
      return { ...state, authors: action.payload };

    default:
      return { ...state };
  }
};

const publicationImageReducer = (
  state = { image: null, success: null },
  action
) => {
  switch (action.type) {
    case ADD_PICTURES_ACTIONS.UPLOAD_IMAGE:
      return { ...state, image: action.payload };
    case ADD_PICTURES_ACTIONS.CLEAR_IMAGE:
      return { ...state, image: null };
    case ADD_PICTURES_ACTIONS.SET_PUBLICATION_SUCCEED:
      return { ...state, success: "SUCCEED" };
    case ADD_PICTURES_ACTIONS.SET_PUBLICATION_FAIL:
      return { ...state, success: "FAIL" };
    case ADD_PICTURES_ACTIONS.CLEAR_PUBLICATION_STATE:
      return { ...state, success: null };
    default:
      return { ...state };
  }
};

const reducers = combineReducers({
  form: reduxForm,
  session: sessionReducer,
  signUpImage: imageSignUpReducer,
  publicationImage: publicationImageReducer,
  homeFeed: homeFeedPublications
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
