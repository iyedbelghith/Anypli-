import type { ApiResponse } from "@shared/types/apiResponse.types";

import type {
    LoginData,
    LoginPayload,
    RefreshData,
    RegisterData,
    RegisterPayload,
    User,
} from "@features/auth/api/authApiInterface";

const normalizeText = (value?: string | null): string => {
    return value?.trim() ?? "";
};

const capitalizeFirstLetter = (value?: string | null): string => {
    const normalizedValue = normalizeText(value);

    if (!normalizedValue) {
        return "";
    }

    return (
        normalizedValue.charAt(0).toUpperCase() +
        normalizedValue.slice(1)
    );
};

const normalizeAuthTokens = (data: Record<string, unknown>): {
    accessToken: string;
    refreshToken?: string;
} => {
    const accessToken =
        (data.accessToken as string | undefined) ??
        (data.access_token as string | undefined) ??
        "";

    const refreshToken =
        (data.refreshToken as string | undefined) ??
        (data.refresh_token as string | undefined);

    return {
        accessToken,
        refreshToken,
    };
};

export const encodeLogin = (payload: LoginPayload): LoginPayload => ({
    ...payload,
    email: normalizeText(payload.email),
    password: payload.password,
});

export const encodeRegister = (
    payload: RegisterPayload
): RegisterPayload => ({
    ...payload,
    name: capitalizeFirstLetter(payload.name),
    prenom: payload.prenom
        ? capitalizeFirstLetter(payload.prenom)
        : null,
    email: normalizeText(payload.email),
    telephone: payload.telephone
        ? normalizeText(payload.telephone)
        : null,
});

export const decodeLogin = (
    response: ApiResponse<LoginData>
): ApiResponse<LoginData> => {
    const tokens = normalizeAuthTokens(
        response.data as unknown as Record<string, unknown>,
    );

    return {
        ...response,
        data: {
            user: response.data.user,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken ?? "",
        },
    };
};

export const decodeRegister = (
    response: ApiResponse<RegisterData>
): ApiResponse<RegisterData> => {
    const tokens = normalizeAuthTokens(
        response.data as unknown as Record<string, unknown>,
    );

    return {
        ...response,
        data: {
            ...response.data,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        },
    };
};

export const decodeRefresh = (
    response: ApiResponse<RefreshData>
): ApiResponse<RefreshData> => {
    const tokens = normalizeAuthTokens(
        response.data as unknown as Record<string, unknown>,
    );

    return {
        ...response,
        data: {
            accessToken: tokens.accessToken,
        },
    };
};

export const decodeMe = (
    response: ApiResponse<User>
): ApiResponse<User> => {
    return response;
};

export const decodeLogout = (
    response: ApiResponse<null>
): ApiResponse<null> => {
    return response;
};
