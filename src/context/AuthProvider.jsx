import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config.js";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // auth state listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // email login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false)
    );
  };

  // register
  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) =>
        updateProfile(res.user, {
          displayName: displayName || "",
          photoURL: photoURL || "",
        }).then(() => res)
      )
      .finally(() => setLoading(false));
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false)
    );
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  const value = { user, loading, signInUser, createUser, googleLogin, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
