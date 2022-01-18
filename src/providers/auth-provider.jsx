/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../auth/firebase-config";

export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = (props) => {
  const [authData, setAuthData] = useState(initialAuthData);

  const onLogout = () => setAuthData(initialAuthData);
  const onLogin = (newAuthData) => setAuthData(newAuthData);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthData(user)
      } else {
        setAuthData(initialAuthData)
      }
    });
  }, [onLogin, onLogout]);


  const authDataValue = useMemo(
    () => ({ ...authData, onLogin, onLogout }),
    [authData]
  );

  return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
