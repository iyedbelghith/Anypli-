import axios, {
    AxiosError,
    type InternalAxiosRequestConfig,
} from "axios";

import { API_CONFIG } from "../../constants/apiConfig";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import { ROUTES } from "../../constants/routes";
import { STORAGE_KEYS } from "../../constants/storageKeys";

import {
    AUTH_SCHEMES,
    CONTENT_TYPES,
    HTTP_HEADERS,
    HTTP_STATUS,
} from "../../constants/http";

interface RetryRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

const api = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    headers: {
        [HTTP_HEADERS.ACCEPT]: CONTENT_TYPES.APPLICATION_JSON,
        [HTTP_HEADERS.CONTENT_TYPE]: CONTENT_TYPES.APPLICATION_JSON,
    },
});

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (accessToken) {
        config.headers[HTTP_HEADERS.AUTHORIZATION] =
            `${AUTH_SCHEMES.BEARER} ${accessToken}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,

    async (error: AxiosError) => {
        const originalRequest = error.config as RetryRequestConfig | undefined;

        if (
            error.response?.status === HTTP_STATUS.UNAUTHORIZED &&
            originalRequest &&
            !originalRequest._retry &&
            !originalRequest.url?.includes(API_ENDPOINTS.AUTH.LOGIN) &&
            !originalRequest.url?.includes(API_ENDPOINTS.AUTH.REFRESH)
        ) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

                if (!refreshToken) {
                    throw new Error("No refresh token found");
                }

                const refreshResponse = await axios.post(
                    `${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.REFRESH}`,
                    {},
                    {
                        headers: {
                            [HTTP_HEADERS.ACCEPT]: CONTENT_TYPES.APPLICATION_JSON,
                            [HTTP_HEADERS.AUTHORIZATION]: `${AUTH_SCHEMES.BEARER} ${refreshToken}`,
                        },
                    }
                );

                const newAccessToken = refreshResponse.data.data.access_token;

                localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, newAccessToken);

                originalRequest.headers[HTTP_HEADERS.AUTHORIZATION] =
                    `${AUTH_SCHEMES.BEARER} ${newAccessToken}`;

                return api(originalRequest);
            } catch {
                localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

                window.location.href = ROUTES.LOGIN;
            }
        }

        return Promise.reject(error);
    }
);

export default api;