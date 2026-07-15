import axios, {
    AxiosError,
    type InternalAxiosRequestConfig,
} from "axios";

import { API_CONFIG } from "../../constants/apiConfig";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import { STORAGE_KEYS } from "../../constants/storageKeys";

interface RetryRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

const api = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,

    async (error: AxiosError) => {
        const originalRequest = error.config as RetryRequestConfig | undefined;

        if (
            error.response?.status === 401 &&
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
                            Accept: "application/json",
                            Authorization: `Bearer ${refreshToken}`,
                        },
                    }
                );

                const newAccessToken = refreshResponse.data.data.accessToken;

                localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return api(originalRequest);
            } catch {
                localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
                localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);

export default api; 