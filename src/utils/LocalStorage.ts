export const ACCESS_TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";

export function setItem(key: string, value: any) {
    localStorage.setItem(key, value);
}

export function getItem(key: string): any {
    console.log('key', key);
    console.log('storage value', localStorage.getItem(key));
    return localStorage.getItem(key);
}