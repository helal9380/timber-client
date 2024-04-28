/** @format */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true)
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth)
  }
  const signInWithGoogle = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGitHub = () => {
    setLoader(true)
    return signInWithPopup(auth, GitHubProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currntUser) => {
      if (currntUser) {
        console.log("user ace", currntUser);
        setUser(currntUser);
      }
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loader,
    createUser,
    login,
    logOut,
    signInWithGoogle,
    signInWithGitHub
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
