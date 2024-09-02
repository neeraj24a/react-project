import React, { PropsWithChildren, useState } from "react";
import { ACCESS_TOKEN, getItem } from "../utils/LocalStorage";

interface AuthContextType extends PropsWithChildren {
    accessToken: string;
    //setAccessToken: () => void;
    updateAccessToken(): void;
    removeAccessToken(): void;
}

// step 1
const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthContextType> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string>("");

    const updateAccessToken = () => {
        const value = getItem(ACCESS_TOKEN);
        console.log('value', value);
        setAccessToken(value ? value : '');
    }

    const removeAccessToken = () => {
        setAccessToken("");
    }

    const value = { accessToken, updateAccessToken, removeAccessToken }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export const useAuth = () => {
    // useContext - helps you to get value from context 
    console.log('auth context', React.useContext(AuthContext));
    return React.useContext(AuthContext);
}
