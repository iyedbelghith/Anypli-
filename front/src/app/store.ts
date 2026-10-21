import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@features/auth/authSlice";
import { authApi } from "@features/auth/api/authApi";
import { usersApi } from "@features/users/api/userApi";
import { AUTH_SLICE_NAME } from "@features/auth/constants/authConstants";

export const store = configureStore({
    reducer: {
        [AUTH_SLICE_NAME]: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
