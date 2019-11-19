import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBDPi_G9js_7ZGSv8RwGtVqVc-tI7QFey8",
  authDomain: "photogram-c12f5.firebaseapp.com",
  databaseURL: "https://photogram-c12f5.firebaseio.com",
  projectId: "photogram-c12f5",
  storageBucket: "",
  messagingSenderId: "926697727514",
  appId: "1:926697727514:web:037c234e0ba94538"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authentication = firebase.auth();
export const dataBase = firebase.database();
