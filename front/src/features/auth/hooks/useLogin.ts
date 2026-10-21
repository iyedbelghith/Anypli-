import { useAppDispatch } from "@app/hooks";

import { setCredentials } from "@features/auth/authSlice";
import { useLoginMutation } from "@features/auth/api/authApi";

import type { LoginPayload } from "@features/auth/api/authApiInterface";

export const useLogin = () => {
    const dispatch = useAppDispatch();

    const [loginMutation, { isLoading, error, isError }] = useLoginMutation();

    const login = async (payload: LoginPayload) => {
        const response = await loginMutation(payload).unwrap();

        dispatch(setCredentials(response.data));

        return response.data;
    };

    return {
        login,
        isLoading,
        isError,
        error,
    };
};