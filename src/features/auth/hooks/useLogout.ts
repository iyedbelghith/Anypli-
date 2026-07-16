import { useAppDispatch } from "@app/hooks";

import { clearAuthState } from "@features/auth/authSlice";
import { useLogoutMutation } from "@features/auth/api/authApi";

export const useLogout = () => {
    const dispatch = useAppDispatch();

    const [logoutMutation, { isLoading, error, isError }] = useLogoutMutation();

    const logout = async () => {
        try {
            await logoutMutation().unwrap();
        } finally {
            dispatch(clearAuthState());
        }
    };

    return {
        logout,
        isLoading,
        isError,
        error,
    };
};