import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { ROUTES } from "@constants/routes";
import { USER_ROLES } from "@constants/roles";

import ProtectedRoute from "@shared/components/ProtectedRoute";
import RoleRoute from "@shared/components/RoleRoute";

import LoginPage from "@pages/LoginPage";
import DashboardPage from "@pages/DashboardPage";
import UsersPage from "@pages/UsersPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />

                <Route
                    path={ROUTES.DASHBOARD}
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path={ROUTES.USERS}
                    element={
                        <ProtectedRoute>
                            <RoleRoute allowedRoles={[USER_ROLES.ADMIN]}>
                                <UsersPage />
                            </RoleRoute>
                        </ProtectedRoute>
                    }
                />

                <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />

                <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
            </Routes>
        </BrowserRouter>
    );
}