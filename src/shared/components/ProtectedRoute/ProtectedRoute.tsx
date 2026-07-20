import { Navigate } from "react-router-dom";
import { ROUTES } from "@constants/routes";
import { useAuthState } from "@features/auth/hooks/useAuthState";
import type { ProtectedRouteProps } from "./ProtectedRouteInterface";


export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated } = useAuthState();

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }
    return children;
}