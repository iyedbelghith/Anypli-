import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { authStorage } from "@features/auth/utils/authStorage";

import {
    AUTH_SLICE_NAME,
    AUTH_STATE_DEFAULTS,
    AUTH_STATE_VALUES,
} from "@features/auth/constants/authConstants";

import type { AuthState } from "./interfaces/authInterfaces";

import type {
    LoginData,
    User,
} from "./api/authApiInterface";



const accessToken = authStorage.getAccessToken();
const refreshToken = authStorage.getRefreshToken();

const initialState: AuthState = {
    user: AUTH_STATE_DEFAULTS.USER,
    access_token: accessToken,
    refresh_token: refreshToken,
    isAuthenticated: Boolean(accessToken),
    loading: AUTH_STATE_DEFAULTS.LOADING,
    error: AUTH_STATE_DEFAULTS.ERROR,
};

const resetAuthState = (state: AuthState): void => {
    state.user = AUTH_STATE_DEFAULTS.USER;
    state.access_token = AUTH_STATE_DEFAULTS.ACCESS_TOKEN;
    state.refresh_token = AUTH_STATE_DEFAULTS.REFRESH_TOKEN;
    state.isAuthenticated = AUTH_STATE_DEFAULTS.IS_AUTHENTICATED;
    state.loading = AUTH_STATE_DEFAULTS.LOADING;
    state.error = AUTH_STATE_DEFAULTS.ERROR;

    authStorage.clearTokens();
};

const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,

    reducers: {
        setCredentials: (state, action: PayloadAction<LoginData>) => {
            state.user = action.payload.user;
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
            state.isAuthenticated = true;
            state.error = AUTH_STATE_DEFAULTS.ERROR;

            authStorage.setAccessToken(action.payload.access_token);
            authStorage.setRefreshToken(action.payload.refresh_token);
        },

        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = AUTH_STATE_DEFAULTS.ERROR;
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.access_token = action.payload;
            state.isAuthenticated = AUTH_STATE_VALUES.AUTHENTICATED;

            authStorage.setAccessToken(action.payload);
        },

        clearAuthState: resetAuthState,
    },
});

export const {
    setCredentials,
    setUser,
    setAccessToken,
    clearAuthState,
} = authSlice.actions;

export default authSlice.reducer;