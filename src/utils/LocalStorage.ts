import { useState } from "react";

export const ACCESS_TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";

export const useLocalStorage = () => {
    const [value, setValue] = useState<string | null>(null);

    const setItem = (key: string, value: any) => {
        localStorage.setItem(key, value);
    }

    const getItem = (key: string) => {
        return localStorage.getItem(key);
    }

    const removeItem = (key: string) => {
        localStorage.removeItem(key);
        setValue(null);
    };

    return { value, setItem, getItem, removeItem };
}

// export function setItem(key: string, value: any) {
//     localStorage.setItem(key, value);
// }

// export function getItem(key: string): any {
//     console.log('key', key);
//     console.log('storage value', localStorage.getItem(key));
//     return localStorage.getItem(key);
// }