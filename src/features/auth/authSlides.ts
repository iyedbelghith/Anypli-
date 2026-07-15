import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import type { LoginData, User } from "../../types/auth";

interface LoginPayload {
    email: string;
    password: string;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    isAuthenticated: !!localStorage.getItem("accessToken"),
    loading: false,
    error: null,
};

export const login = createAsyncThunk<LoginData, LoginPayload>(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        try {
            return await authService.login(payload);
        } catch {
            return rejectWithValue("Email ou mot de passe incorrect");
        }
    }
);

export const fetchMe = createAsyncThunk<User>(
    "auth/fetchMe",
    async (_, { rejectWithValue }) => {
        try {
            return await authService.me();
        } catch {
            return rejectWithValue("Utilisateur non authentifié");
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            await authService.logout();
            return true;
        } catch {
            return rejectWithValue("Erreur lors de la déconnexion");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        clearAuthState: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            state.error = null;

            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        },
    },

    extraReducers: (builder) => {
        builder

            // LOGIN
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                state.isAuthenticated = true;

                localStorage.setItem("accessToken", action.payload.accessToken);
                localStorage.setItem("refreshToken", action.payload.refreshToken);
            })

            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isAuthenticated = false;
            })

            // FETCH ME
            .addCase(fetchMe.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchMe.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })

            .addCase(fetchMe.rejected, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;

                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
            })

            // LOGOUT
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.accessToken = null;
                state.refreshToken = null;
                state.isAuthenticated = false;
                state.loading = false;
                state.error = null;

                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
            });
    },
});

export const { clearAuthState } = authSlice.actions;

export default authSlice.reducer;