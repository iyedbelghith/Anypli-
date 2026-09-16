import type { UserRole } from "@features/auth/types/authTypes";

export type UserStatus = "active" | "inactive";

export interface UserApiResponse {
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

export interface UserTableItem {
    id: number;
    name: string;
    prenom: string;
    email: string;
    telephone: string;
    role: UserRole;
    status: UserStatus;
    createdAt: string;
}

export interface CreateUserPayload {
    name: string;
    prenom?: string | null;
    email: string;
    password: string;
    telephone?: string | null;
    role: UserRole;
}

export interface UpdateUserPayload {
    id: number;
    name: string;
    prenom?: string | null;
    email: string;
    telephone?: string | null;
    role: UserRole;
}
export interface PaginatedResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}