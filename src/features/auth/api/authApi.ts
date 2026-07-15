import api from "../../../shared/api/axios";
import { API_ENDPOINTS } from "../../../constants/apiEndpoints";

import type { ApiResponse } from "../../../shared/types/apiResponse.types";

import type {
    LoginPayload,
    LoginData,
    RefreshData,
    User,
} from "../interfaces/authInterfaces";

export const authApi = {
    async login(payload: LoginPayload): Promise<LoginData> {
        const response = await api.post<ApiResponse<LoginData>>(
            API_ENDPOINTS.AUTH.LOGIN,
            payload
        );

        return response.data.data;
    },
    async me(): Promise<User> {
        const response = await api.get<ApiResponse<User>>(
            API_ENDPOINTS.AUTH.ME
        );
        return response.data.data;
    },
    async refresh(): Promise<RefreshData> {
        const response = await api.post<ApiResponse<RefreshData>>(
            API_ENDPOINTS.AUTH.REFRESH
        );
        return response.data.data;
    },
    async logout(): Promise<void> {
        await api.post(API_ENDPOINTS.AUTH.LOGOUT);
    },
};