// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB19cODFBohpfjgh2YGGSrqpNvPa04n8F8",
  authDomain: "jedsd-69f8e.firebaseapp.com",
  projectId: "jedsd-69f8e",
  storageBucket: "jedsd-69f8e.firebasestorage.app",
  messagingSenderId: "379403199861",
  appId: "1:379403199861:web:1641ed4b9551ab8a145f3c",
  measurementId: "G-RL4L2X1H1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const storage = getStorage(app);

export {storage,app}




