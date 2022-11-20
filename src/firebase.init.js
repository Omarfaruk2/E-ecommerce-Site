// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {



    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    // appId: process.env.REACT_APP_APP_ID,
    // Your web app's Firebase configuration

    apiKey: "AIzaSyCisgEc5q4HcRsgnC-ubQwosEAXQK4WVFc",
    authDomain: "e-commerce-f435d.firebaseapp.com",
    projectId: "e-commerce-f435d",
    storageBucket: "e-commerce-f435d.appspot.com",
    messagingSenderId: "917841482404",
    appId: "1:917841482404:web:8d71c6c106d621765acc31"


}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth