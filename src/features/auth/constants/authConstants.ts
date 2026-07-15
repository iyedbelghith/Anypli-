export const AUTH_SLICE_NAME = "auth" as const;

export const AUTH_THUNK_TYPES = {
    LOGIN: `${AUTH_SLICE_NAME}/login`,
    FETCH_ME: `${AUTH_SLICE_NAME}/fetchMe`,
    LOGOUT: `${AUTH_SLICE_NAME}/logout`,
} as const;

export const AUTH_ERROR_MESSAGES = {
    LOGIN_FAILED: "Email ou mot de passe incorrect",
    FETCH_ME_FAILED: "Utilisateur non authentifié",
    LOGOUT_FAILED: "Erreur lors de la déconnexion",
} as const;

export const AUTH_STATE_DEFAULTS = {
    USER: null,
    ACCESS_TOKEN: null,
    REFRESH_TOKEN: null,
    IS_AUTHENTICATED: false,
    LOADING: false,
    ERROR: null,
} as const;