// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7IbzXIqxurJdDk0AAx4qyPVD_WTR0UxY",
  authDomain: "assignment-ten-ee904.firebaseapp.com",
  projectId: "assignment-ten-ee904",
  storageBucket: "assignment-ten-ee904.appspot.com",
  messagingSenderId: "484490855813",
  appId: "1:484490855813:web:43c63ebe136e87e93af0ec",
};

const app = initializeApp(firebaseConfig);
export default app;
