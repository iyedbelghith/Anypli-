import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_CONFIG } from "../../constants/apiConfig";
import {
    AUTH_SCHEMES,
    CONTENT_TYPES,
    HTTP_HEADERS,
} from "../../constants/http";
import { STORAGE_KEYS } from "../../constants/storageKeys";

export const baseQuery = fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,

    prepareHeaders: (headers) => {
        const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

        headers.set(HTTP_HEADERS.ACCEPT, CONTENT_TYPES.APPLICATION_JSON);
        headers.set(HTTP_HEADERS.CONTENT_TYPE, CONTENT_TYPES.APPLICATION_JSON);

        if (accessToken) {
            headers.set(
                HTTP_HEADERS.AUTHORIZATION,
                `${AUTH_SCHEMES.BEARER} ${accessToken}`
            );
        }

        return headers;
    },
});