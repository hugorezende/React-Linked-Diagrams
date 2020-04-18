import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthDataContext = createContext(null);

const initialAuthData = null;

const AuthDataProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData);

  /* The first time the component is rendered, it tries to
   * fetch the auth data from a source, like a cookie or
   * the localStorage.
   */
  useEffect(() => {}, []);

  const onLogout = () => setAuthData(initialAuthData);

  const onLogin = newAuthData => {
    setAuthData(newAuthData);
  };

  return (
    <AuthDataContext.Provider
      value={{ authData, onLogin, onLogout }}
      {...props}
    />
  );
};
export const useAuthDataContext = () => useContext(AuthDataContext);
export default AuthDataProvider;
