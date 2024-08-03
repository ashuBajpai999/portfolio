// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPqhDnLWSGff4yFjS0QiD5yLleXlHWNb0",
  authDomain: "portfolio-4f287.firebaseapp.com",
  projectId: "portfolio-4f287",
  storageBucket: "portfolio-4f287.appspot.com",
  messagingSenderId: "471684723008",
  appId: "1:471684723008:web:b94dff1c5058a95af9caa5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
