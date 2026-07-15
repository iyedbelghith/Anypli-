export const HTTP_STATUS = {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    VALIDATION_ERROR: 422,
    SERVER_ERROR: 500,
} as const;

export const HTTP_HEADERS = {
    ACCEPT: "Accept",
    CONTENT_TYPE: "Content-Type",
    AUTHORIZATION: "Authorization",
} as const;

export const CONTENT_TYPES = {
    APPLICATION_JSON: "application/json",
} as const;

export const AUTH_SCHEMES = {
    BEARER: "Bearer",
} as const;