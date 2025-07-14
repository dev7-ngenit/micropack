"use client";

import { AuthContext } from "@/contexts";
import authReducer, { authActions } from "@/reducers/authReducer";
import { useEffect, useReducer } from "react";

export default function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      dispatch({ type: authActions.LOGIN, payload: userData });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
