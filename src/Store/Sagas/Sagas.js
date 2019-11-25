import { takeEvery, call } from "redux-saga/effects";
import { authentication, dataBase } from "../Services/Firebase";
import { LOGIN_ACTIONS } from "../Actions/LoginActions";
import { REGISTER_ACTIONS } from "../Actions/RegisterActions";

const firebaseRegister = values =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => JSON.parse(JSON.stringify(success)));

const dataBaseRegister = ({ uid, email, name }) =>
  dataBase.ref("usuarios/" + uid).set({ email, nombre: name });

function* registerSaga(values) {
  try {
    const register = yield call(firebaseRegister, values.datos);
    const { email, uid } = register.user;
    const { name } = values.datos;
    yield call(dataBaseRegister, { uid, email, name });
  } catch (error) {
    console.log("fail on register", error);
  }
}

const firebaseLogin = ({ email, password }) =>
  authentication
    .signInWithEmailAndPassword(email, password)
    .then(success => JSON.parse(JSON.stringify(success)));

function* loginSaga(values) {
  try {
    const login = yield call(firebaseLogin, values.values);
    //console.log(login);
  } catch (error) {
    console.log("fail on login", error);
  }
}

export function* sagas() {
  yield takeEvery(REGISTER_ACTIONS.REGISTER, registerSaga);
  yield takeEvery(LOGIN_ACTIONS.LOGIN, loginSaga);
}
