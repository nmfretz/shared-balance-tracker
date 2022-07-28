import React, { useState, useEffect, useContext } from "react";
import { auth } from "../lib/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);

  function login() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    return signInWithPopup(auth, provider);
  }

  function logout() {
    return auth.signOut();
  }

  const value = {
    user,
    loading,
    error,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
