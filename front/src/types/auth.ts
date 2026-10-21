export type UserRole = 'admin' | 'employe' | 'client';

export interface User {
    id: string;
    name: string;
    prenom: string;
    email: string;
    role: UserRole;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;

}
//data retournée par /login
export interface LoginData {
    user: User;
    accessToken: string;
    refreshToken: string;
}
//data retournée par /refresh
export interface RefreshData {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
}
//format général de ton ApiResponse Laravel
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}   

