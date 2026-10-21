import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_CONFIG } from "@constants/apiConfig";

import {
    AUTH_SCHEMES,
    CONTENT_TYPES,
    HTTP_HEADERS,
} from "@constants/http";

import { authStorage } from "@features/auth/utils/authStorage";

export const baseQuery = (baseUrl: string = API_CONFIG.BASE_URL) =>
    fetchBaseQuery({
        baseUrl,

        prepareHeaders: (headers) => {
            const accessToken = authStorage.getAccessToken();

            headers.set(HTTP_HEADERS.ACCEPT, CONTENT_TYPES.APPLICATION_JSON);
            headers.set(HTTP_HEADERS.CONTENT_TYPE, CONTENT_TYPES.APPLICATION_JSON);

            if (accessToken && accessToken !== "undefined" && accessToken !== "null") {
                headers.set(
                    HTTP_HEADERS.AUTHORIZATION,
                    `${AUTH_SCHEMES.BEARER} ${accessToken}`
                );
            }

            return headers;
        },
    });