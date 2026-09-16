import type { UserRole } from "@features/auth/types/authTypes";

export interface User {
    id: number;
    name: string;
    prenom: string | null;
    email: string;
    telephone: string | null;
    email_verified_at: string | null;
    role: UserRole;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginData {
    user: User;
    accessToken: string;
    refreshToken: string;
}

export interface RegisterPayload {
    name: string;
    prenom?: string | null;
    email: string;
    password: string;
    telephone?: string | null;
    role: UserRole;
}

export interface RegisterData {
    user: User;
    accessToken: string;
    refreshToken?: string;
    access_token?: string;
    token_type?: string;
    expires_in?: number;
}

export interface RefreshData {
    accessToken: string;
}

export interface LogoutData {
    message?: string;
}
