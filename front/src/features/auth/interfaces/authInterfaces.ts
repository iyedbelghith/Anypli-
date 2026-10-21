import type { User } from "@features/auth/api/authApiInterface";

export interface AuthState {
    user: User | null;
    access_token: string | null;
    refresh_token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}