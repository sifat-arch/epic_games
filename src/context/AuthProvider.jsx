import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const resetPaswword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // set a observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      return () => unsubscribe();
    });
  }, []);

  const userInfo = {
    registerUser,
    updateUser,
    signInWithGoogle,
    logInUser,
    user,
    setUser,
    setLoading,
    loading,
    signOutUser,
    resetPaswword,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
