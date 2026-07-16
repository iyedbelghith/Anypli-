import { useAppDispatch } from "@app/hooks";

import { clearAuthState } from "@features/auth/authSlice";

export const useClearAuth = () => {
    const dispatch = useAppDispatch();

    const clearAuth = () => {
        dispatch(clearAuthState());
    };

    return {
        clearAuth,
    };
};