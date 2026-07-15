import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
    clearAuthState,
    fetchMe,
    login as loginThunk,
    logout as logoutThunk,
} from "../authSlice";

import type { LoginPayload } from "../interfaces/authInterfaces";

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const {
        user,
        access_token,
        refresh_token,
        isAuthenticated,
        loading,
        error,
    } = useAppSelector((state) => state.auth);

    const login = async (payload: LoginPayload) => {
        return await dispatch(loginThunk(payload)).unwrap();
    };

    const getMe = async () => {
        return await dispatch(fetchMe()).unwrap();
    };
    const logout = async () => {
        return await dispatch(logoutThunk()).unwrap();
    };

    const clearAuth = () => {
        dispatch(clearAuthState());
    };
    return {
        user,
        access_token,
        refresh_token,
        isAuthenticated,
        loading,
        error,
        login,
        getMe,
        logout,
        clearAuth,
    };
}