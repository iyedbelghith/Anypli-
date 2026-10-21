import { Navigate } from "react-router-dom";

import { ROUTES } from "@constants/routes";
import { useAuthState } from "@features/auth/hooks";

import type { RoleRouteProps } from "./RoleRouteInterface";

export default function RoleRoute({
    children,
    allowedRoles,
}: RoleRouteProps) {
    const { user, isAuthenticated } = useAuthState();

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    if (!user || !allowedRoles.includes(user.role)) {
        return <Navigate to={ROUTES.DASHBOARD} replace />;
    }

    return children;
}