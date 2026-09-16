import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { baseQuery } from "@shared/api/baseQuery";

import { API_ENDPOINTS } from "@constants/apiEndpoints";
import {
    AUTH_SCHEMES,
    HTTP_HEADERS,
    HTTP_METHODS,
    HTTP_STATUS,
} from "@constants/http";

import {
    clearAuthState,
    setAccessToken,
} from "@features/auth/authSlice";

import { authStorage } from "@features/auth/utils/authStorage";

import type { ApiResponse } from "@shared/types/apiResponse.types";
import type { RefreshData } from "@features/auth/api/authApiInterface";

const rawBaseQuery = baseQuery();

const isAuthEndpoint = (args: string | FetchArgs): boolean => {
    const url = typeof args === "string" ? args : args.url;

    return (
        url.includes(API_ENDPOINTS.AUTH.LOGIN) ||
        url.includes(API_ENDPOINTS.AUTH.REFRESH)
    );
};

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await rawBaseQuery(args, api, extraOptions);

    if (
        result.error?.status === HTTP_STATUS.UNAUTHORIZED &&
        !isAuthEndpoint(args)
    ) {
        const refreshToken = authStorage.getRefreshToken();

        if (!refreshToken) {
            api.dispatch(clearAuthState());
            return result;
        }

        const refreshResult = await rawBaseQuery(
            {
                url: API_ENDPOINTS.AUTH.REFRESH,
                method: HTTP_METHODS.POST,
                headers: {
                    [HTTP_HEADERS.AUTHORIZATION]: `${AUTH_SCHEMES.BEARER} ${refreshToken}`,
                },
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            const refreshResponse = refreshResult.data as ApiResponse<RefreshData>;
            const nextAccessToken =
                refreshResponse.data.accessToken ??
                (refreshResponse.data as { access_token?: string }).access_token;

            if (!nextAccessToken) {
                api.dispatch(clearAuthState());
                return result;
            }

            api.dispatch(setAccessToken(nextAccessToken));

            result = await rawBaseQuery(args, api, extraOptions);
        } else {
            api.dispatch(clearAuthState());
        }
    }

    return result;
};