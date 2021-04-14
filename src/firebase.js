import firebase from "firebase";
import 'firebase/firestore'

// firebase init - add your own config here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUbU9EB9OSdZqC-G2dhn0RZ8nYstYrLk8",
    authDomain: "simplecoding-481af.firebaseapp.com",
    projectId: "simplecoding-481af",
    storageBucket: "simplecoding-481af.appspot.com",
    messagingSenderId: "865816376530",
    appId: "1:865816376530:web:2f5fdddd69b763631ba90b",
    measurementId: "G-64YJ67N06K"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()

// collection references

// export utils/refs
export {
    db
}
