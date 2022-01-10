import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import Cookies from "universal-cookie";

export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = (props) => {
  const [authData, setAuthData] = useState(initialAuthData);

  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get("email")) {
      const id = cookies.get("id");
      const name = cookies.get("name");
      const email = cookies.get("email");
      setAuthData({ email, id, name });
    }
  }, []);

  const onLogout = () => setAuthData(initialAuthData);

  const onLogin = (newAuthData) => setAuthData(newAuthData);

  const authDataValue = useMemo(
    () => ({ ...authData, onLogin, onLogout }),
    [authData]
  );

  return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;
