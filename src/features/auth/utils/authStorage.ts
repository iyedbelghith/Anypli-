import { STORAGE_KEYS } from "../../../constants/storageKeys";

export const authStorage = {
    getAccessToken(): string | null {
        return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    },

    getRefreshToken(): string | null {
        return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    },

    setAccessToken(token: string): void {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
    },

    setRefreshToken(token: string): void {
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
    },

    clearTokens(): void {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    },
};