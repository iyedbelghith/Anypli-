import { useAppSelector } from "@app/hooks";
import { AUTH_SLICE_NAME } from "@features/auth/constants/authConstants";

export const useAuthState = () => {
    return useAppSelector((state) => state[AUTH_SLICE_NAME]);
};