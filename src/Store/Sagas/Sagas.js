import { takeEvery, call } from "redux-saga/effects";
import { authentication } from "../Services/Firebase";

const firebaseRegister = values => {
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => console.log("response on success", success))
    .catch(error => {
      console.log("response on fail", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

function* generadoraRegistro(values) {
  yield call(firebaseRegister, values.datos);
  console.log("values", values);
}

export default function* funcionPrimaria() {
  yield takeEvery("REGISTRO", generadoraRegistro);
  console.log("log desde el saga");
}
