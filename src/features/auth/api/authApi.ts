import { createApi } from "@reduxjs/toolkit/query/react";

import { API_ENDPOINTS } from "@constants/apiEndpoints";
import {
    AUTH_SCHEMES,
    HTTP_HEADERS,
    HTTP_METHODS,
} from "@constants/http";

import { baseQueryWithReauth } from "@shared/api/baseQueryWithReauth";
import type { ApiResponse } from "@shared/types/apiResponse.types";

import {
    AUTH_API_REDUCER_PATH,
} from "@features/auth/constants/authConstants";

import { authStorage } from "@features/auth/utils/authStorage";

import type {
    LoginData,
    LoginPayload,
    RegisterData,
    RegisterPayload,
    RefreshData,
    User,
} from "@features/auth/api/authApiInterface";

import {
    decodeLogin,
    decodeLogout,
    decodeMe,
    decodeRefresh,
    decodeRegister,
    encodeLogin,
    encodeRegister,
} from "./transformer";

export const authApi = createApi({
    reducerPath: AUTH_API_REDUCER_PATH,

    baseQuery: baseQueryWithReauth,

    endpoints: (builder) => ({
        register: builder.mutation<ApiResponse<RegisterData>, RegisterPayload>({
            query: (payload) => ({
                url: API_ENDPOINTS.AUTH.REGISTER,
                method: HTTP_METHODS.POST,
                body: encodeRegister(payload),
            }),
            transformResponse: decodeRegister,
        }),

        login: builder.mutation<ApiResponse<LoginData>, LoginPayload>({
            query: (payload) => ({
                url: API_ENDPOINTS.AUTH.LOGIN,
                method: HTTP_METHODS.POST,
                body: encodeLogin(payload),
            }),
            transformResponse: decodeLogin,
        }),

        me: builder.query<ApiResponse<User>, void>({
            query: () => ({
                url: API_ENDPOINTS.AUTH.ME,
                method: HTTP_METHODS.GET,
            }),
            transformResponse: decodeMe,
        }),

        refresh: builder.mutation<ApiResponse<RefreshData>, void>({
            query: () => {
                const refreshToken = authStorage.getRefreshToken();

                return {
                    url: API_ENDPOINTS.AUTH.REFRESH,
                    method: HTTP_METHODS.POST,
                    headers: {
                        [HTTP_HEADERS.AUTHORIZATION]: `${AUTH_SCHEMES.BEARER} ${refreshToken}`,
                    },
                };
            },
            transformResponse: decodeRefresh,
        }),

        logout: builder.mutation<ApiResponse<null>, void>({
            query: () => ({
                url: API_ENDPOINTS.AUTH.LOGOUT,
                method: HTTP_METHODS.POST,
            }),
            transformResponse: decodeLogout,
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useMeQuery,
    useLazyMeQuery,
    useRefreshMutation,
    useLogoutMutation,
} = authApi;