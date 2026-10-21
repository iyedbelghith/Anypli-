import { createApi } from "@reduxjs/toolkit/query/react";

import { API_ENDPOINTS } from "@constants/apiEndpoints";
import { HTTP_METHODS } from "@constants/http";

import { baseQueryWithReauth } from "@shared/api/baseQueryWithReauth";
import type { ApiResponse } from "@shared/types/apiResponse.types";

import type {
    CreateUserPayload,
    PaginatedResponse,
    UpdateUserPayload,
    UserApiResponse,
} from "./usersApiInterface";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Users"],

    endpoints: (builder) => ({
        getUsers: builder.query<
            ApiResponse<PaginatedResponse<UserApiResponse>>,
            number | void
        >({
            query: (page = 1) => ({
                url: `${API_ENDPOINTS.USERS}?page=${page}`,
                method: HTTP_METHODS.GET,
            }),
            providesTags: ["Users"],
        }),

        createUser: builder.mutation<ApiResponse<UserApiResponse>, CreateUserPayload>({
            query: (payload) => ({
                url: API_ENDPOINTS.USERS,
                method: HTTP_METHODS.POST,
                body: payload,
            }),
            invalidatesTags: ["Users"],
        }),

        updateUser: builder.mutation<ApiResponse<UserApiResponse>, UpdateUserPayload>({
            query: ({ id, ...payload }) => ({
                url: `${API_ENDPOINTS.USERS}/${id}`,
                method: HTTP_METHODS.PUT,
                body: payload,
            }),
            invalidatesTags: ["Users"],
        }),

        deleteUser: builder.mutation<ApiResponse<null>, number>({
            query: (id) => ({
                url: `${API_ENDPOINTS.USERS}/${id}`,
                method: HTTP_METHODS.DELETE,
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usersApi;