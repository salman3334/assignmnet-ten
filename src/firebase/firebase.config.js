
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { app, auth };
// export default app;
// Import the functions you need from the SDKs you need
// src/firebase/firebase.config.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7IbzXIqxurJdDk0AAx4qyPVD_WTR0UxY",
  authDomain: "assignment-ten-ee904.firebaseapp.com",
  projectId: "assignment-ten-ee904",
  storageBucket: "assignment-ten-ee904.appspot.com",
  messagingSenderId: "484490855813",
  appId: "1:484490855813:web:43c63ebe136e87e93af0ec"
};

const app = initializeApp(firebaseConfig);

export default app;
