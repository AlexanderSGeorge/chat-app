import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCMtoWzFOVeVV238pGGCcodhnLym5ZGwTA",
    authDomain: "chat-app-e1f17.firebaseapp.com",
    projectId: "chat-app-e1f17",
    storageBucket: "chat-app-e1f17.appspot.com",
    messagingSenderId: "906661166594",
    appId: "1:906661166594:web:baada866f6685cc368f11b"
  };

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};