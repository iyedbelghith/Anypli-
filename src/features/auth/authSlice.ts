import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { authApi } from "./api/authApi";
import { authStorage } from "./utils/authStorage";

import {
    AUTH_ERROR_MESSAGES,
    AUTH_SLICE_NAME,
    AUTH_STATE_DEFAULTS,
    AUTH_THUNK_TYPES,
} from "./constants/authConstants";

import type {
    AuthState,
    LoginData,
    LoginPayload,
    User,
} from "./interfaces/authInterfaces";

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

export const login = createAsyncThunk<LoginData, LoginPayload>(
    AUTH_THUNK_TYPES.LOGIN,
    async (payload, { rejectWithValue }) => {
        try {
            return await authApi.login(payload);
        } catch {
            return rejectWithValue(AUTH_ERROR_MESSAGES.LOGIN_FAILED);
        }
    }
);

export const fetchMe = createAsyncThunk<User>(
    AUTH_THUNK_TYPES.FETCH_ME,
    async (_, { rejectWithValue }) => {
        try {
            return await authApi.me();
        } catch {
            return rejectWithValue(AUTH_ERROR_MESSAGES.FETCH_ME_FAILED);
        }
    }
);

export const logout = createAsyncThunk(
    AUTH_THUNK_TYPES.LOGOUT,
    async (_, { rejectWithValue }) => {
        try {
            await authApi.logout();
            return true;
        } catch {
            return rejectWithValue(AUTH_ERROR_MESSAGES.LOGOUT_FAILED);
        }
    }
);

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
        clearAuthState: resetAuthState,
    },

    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = AUTH_STATE_DEFAULTS.ERROR;
            })

            .addCase(login.fulfilled, (state, action) => {
                state.loading = AUTH_STATE_DEFAULTS.LOADING;
                state.error = AUTH_STATE_DEFAULTS.ERROR;

                state.user = action.payload.user;
                state.access_token = action.payload.access_token;
                state.refresh_token = action.payload.refresh_token;
                state.isAuthenticated = true;

                authStorage.setAccessToken(action.payload.access_token);
                authStorage.setRefreshToken(action.payload.refresh_token);
            })

            .addCase(login.rejected, (state, action) => {
                state.loading = AUTH_STATE_DEFAULTS.LOADING;
                state.error = action.payload as string;
                state.isAuthenticated = AUTH_STATE_DEFAULTS.IS_AUTHENTICATED;
            })

            .addCase(fetchMe.pending, (state) => {
                state.loading = true;
                state.error = AUTH_STATE_DEFAULTS.ERROR;
            })

            .addCase(fetchMe.fulfilled, (state, action) => {
                state.loading = AUTH_STATE_DEFAULTS.LOADING;
                state.error = AUTH_STATE_DEFAULTS.ERROR;

                state.user = action.payload;
                state.isAuthenticated = true;
            })

            .addCase(fetchMe.rejected, (state, action) => {
                resetAuthState(state);
                state.error = action.payload as string;
            })

            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = AUTH_STATE_DEFAULTS.ERROR;
            })

            .addCase(logout.fulfilled, (state) => {
                resetAuthState(state);
            })

            .addCase(logout.rejected, (state, action) => {
                resetAuthState(state);
                state.error = action.payload as string;
            });
    },
});

export const { clearAuthState } = authSlice.actions;

export default authSlice.reducer;