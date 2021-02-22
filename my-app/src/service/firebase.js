import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"
import "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyBtC9hQmpO_gLhkPqg1KMs6LoBjQeZ-VxQ",
    authDomain: "leollo.firebaseapp.com",
    projectId: "leollo",
    storageBucket: "leollo.appspot.com",
    messagingSenderId: "954327085639",
    appId: "1:954327085639:web:30072d9a90ae07a74777"


};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()



export { db, auth, firebase }