import type { LoginPayload } from "@features/auth/api/authApiInterface";

export type LoginForm = LoginPayload;

export type LoginFormField = keyof LoginForm;