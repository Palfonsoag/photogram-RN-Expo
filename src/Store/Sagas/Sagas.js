import { takeEvery, call, select, put, all } from "redux-saga/effects";
import { authentication, dataBase } from "../Services/Firebase";
import { cloudinaryConfig } from "../Services/Cloudinary";
import { LOGIN_ACTIONS } from "../Actions/LoginActions";
import { REGISTER_ACTIONS } from "../Actions/RegisterActions";
import {
  ADD_PICTURES_ACTIONS,
  setPublicationSucceed,
  setPublicationFail
} from "../Actions/AddPictureActions";
import {
  HOME_ACTIONS,
  setFeedPublications,
  setFeedAuthors
} from "../Actions/HomeActions";

const firebaseRegister = values =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => JSON.parse(JSON.stringify(success)));

const dataBaseRegister = ({ uid, email, name, profilePicSecUrl }) =>
  dataBase
    .ref("usuarios/" + uid)
    .set({ email, nombre: name, urlPerfil: profilePicSecUrl });

const submitPictureToFirebase = (
  { width, height, secure_url, uid },
  caption = ""
) =>
  dataBase
    .ref("publications/")
    .push({ width, height, secure_url, uid, caption })
    .then(response => response);

const setAuthorPublicationRelation = ({ key, uid }) =>
  dataBase
    .ref(`author-publication/${uid}`)
    .update({ [key]: true })
    .then(response => response);

const getFeed = () =>
  dataBase
    .ref("publications/")
    .once("value")
    .then(response => {
      let publications = [];
      response.forEach(snapshot => {
        publications.push({ ...snapshot.val(), key: snapshot.key });
      });
      return publications;
    });

const getPublicationAuthor = uid =>
  dataBase
    .ref(`usuarios/${uid}`)
    .once("value")
    .then(snapshot => snapshot.val());

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
  } catch (error) {
    console.log("fail on login", error);
  }
}

function* submitPublicationSaga(values) {
  try {
    const image = yield select(state => state.publicationImage.image);
    const uid = yield select(state => state.session.uid);

    const publicationPicUrl = yield call(cloudinaryPictureRegister, image);
    const { width, height, secure_url } = publicationPicUrl;
    const params = {
      width,
      height,
      secure_url,
      uid
    };
    const submitToFirebase = yield call(
      submitPictureToFirebase,
      params,
      values.payload.caption
    );
    const { key } = submitToFirebase;

    const authorPublication = yield call(setAuthorPublicationRelation, {
      key,
      uid
    });
    yield put(setPublicationSucceed());
  } catch (error) {
    console.log("fail on submit publication", error);
    yield put(setPublicationFail());
  }
}

function* getFeedSaga() {
  try {
    const publications = yield call(getFeed);

    const authors = yield all(
      publications.map(publication =>
        call(getPublicationAuthor, publication.uid)
      )
    );
    yield put(setFeedAuthors(authors));
    yield put(setFeedPublications(publications));
  } catch (error) {
    console.log("fail on get feed", error);
  }
}

export function* sagas() {
  yield takeEvery(REGISTER_ACTIONS.REGISTER, registerSaga);
  yield takeEvery(LOGIN_ACTIONS.LOGIN, loginSaga);
  yield takeEvery(
    ADD_PICTURES_ACTIONS.SUBMIT_PUBLICATION,
    submitPublicationSaga
  );
  yield takeEvery(HOME_ACTIONS.GET_FEED_IMAGES, getFeedSaga);
}
