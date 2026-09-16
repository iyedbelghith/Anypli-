import { STORAGE_KEYS } from "@constants/storageKeys";

export const authStorage = {
    getAccessToken(): string | null {
        return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    },

    getRefreshToken(): string | null {
        return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    },

    setAccessToken(token: string): void {
        if (!token || token === "undefined" || token === "null") {
            localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
            return;
        }

        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
    },

    setRefreshToken(token: string): void {
        if (!token || token === "undefined" || token === "null") {
            localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
            return;
        }

        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
    },

    clearTokens(): void {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    },
};