import { useAppDispatch } from "@app/hooks";

import { setUser } from "@features/auth/authSlice";
import { useLazyMeQuery } from "@features/auth/api/authApi";

export const useGetMe = () => {
    const dispatch = useAppDispatch();

    const [getMeQuery, { isFetching, error, isError }] = useLazyMeQuery();

    const getMe = async () => {
        const response = await getMeQuery().unwrap();

        dispatch(setUser(response.data));

        return response.data;
    };

    return {
        getMe,
        isLoading: isFetching,
        isError,
        error,
    };
};