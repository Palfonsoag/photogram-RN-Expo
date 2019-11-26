import { takeEvery, call, select } from "redux-saga/effects";
import { authentication, dataBase } from "../Services/Firebase";
import { cloudinaryConfig } from "../Services/Cloudinary";
import { LOGIN_ACTIONS } from "../Actions/LoginActions";
import { REGISTER_ACTIONS } from "../Actions/RegisterActions";

const firebaseRegister = values =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => JSON.parse(JSON.stringify(success)));

const dataBaseRegister = ({ uid, email, name, profilePicSecUrl }) =>
  dataBase
    .ref("usuarios/" + uid)
    .set({ email, nombre: name, urlPerfil: profilePicSecUrl });

const cloudinaryPictureRegister = image => {
  const { uri, type } = image;
  const splitName = uri.split("/");
  const name = [...splitName].pop();
  const pictureFormData = new FormData();
  pictureFormData.append("upload_preset", cloudinaryConfig.unsignedPreset);
  pictureFormData.append("file", { uri, type: "image/jpeg", name });
  return fetch(cloudinaryConfig.name, { method: "POST", body: pictureFormData })
    .then(response => response.json())
    .catch(error => {
      console.log(error);
      console.log(error.message);
      return error;
    });
};
function* registerSaga(values) {
  try {
    const image = yield select(state => state.signUpImage.image);
    const profilePicUrl = yield call(cloudinaryPictureRegister, image);
    const profilePicSecUrl = profilePicUrl.secure_url;
    const register = yield call(firebaseRegister, values.datos);
    const { email, uid } = register.user;
    const { name } = values.datos;
    yield call(dataBaseRegister, { uid, email, name, profilePicSecUrl });
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
