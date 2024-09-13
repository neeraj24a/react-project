import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN, useLocalStorage } from "../utils/LocalStorage";

type Props = {
  children?: ReactNode
}

interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (val: string | null) => void;
  setRefreshToken: (val: string | null) => void;
}

const initialValue = {
  accessToken: '',
  refreshToken: '',
  setAccessToken: () => { },
  setRefreshToken: () => { },
  setToken: () => { }
}

const AuthContext = createContext<AuthContextType>(initialValue);

const AuthProvider = ({ children }: Props) => {
  const { setItem, getItem, removeItem } = useLocalStorage();
  // State to hold the authentication token
  const [accessToken, setAccessToken] = useState(getItem(ACCESS_TOKEN));
  const [refreshToken, setRefreshToken] = useState(getItem(REFRESH_TOKEN));

  // Function to set the authentication token
  const setToken = (newToken: string) => {
    setAccessToken(newToken);
  };

  const setRefreshTokn = (newRefreshToken: string) => {
    setRefreshToken(newRefreshToken);
  }

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
      setItem(ACCESS_TOKEN, accessToken);
      setItem(REFRESH_TOKEN, refreshToken);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      removeItem(ACCESS_TOKEN);
      removeItem(REFRESH_TOKEN);
    }
  }, [accessToken]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      accessToken,
      refreshToken,
      setToken,
      setRefreshTokn,
      setAccessToken,
      setRefreshToken
    }),
    [accessToken]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;