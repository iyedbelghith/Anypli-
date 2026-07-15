import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { baseQuery } from "./baseQuery";

import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import {
    AUTH_SCHEMES,
    HTTP_HEADERS,
    HTTP_STATUS,
} from "../../constants/http";
import { STORAGE_KEYS } from "../../constants/storageKeys";

import type { ApiResponse } from "../interfaces/apiResponse.interface";

interface RefreshResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === HTTP_STATUS.UNAUTHORIZED) {
        const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

        if (!refreshToken) {
            localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
            localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

            return result;
        }

        const refreshResult = await baseQuery(
            {
                url: API_ENDPOINTS.AUTH.REFRESH,
                method: "POST",
                headers: {
                    [HTTP_HEADERS.AUTHORIZATION]: `${AUTH_SCHEMES.BEARER} ${refreshToken}`,
                },
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            const response = refreshResult.data as ApiResponse<RefreshResponse>;

            localStorage.setItem(
                STORAGE_KEYS.ACCESS_TOKEN,
                response.data.access_token
            );

            result = await baseQuery(args, api, extraOptions);
        } else {
            localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
            localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        }
    }

    return result;
};