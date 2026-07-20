import type { ReactNode } from "react";
import type { UserRole } from "@features/auth/types/authTypes";

export interface RoleRouteProps {
    children: ReactNode;
    allowedRoles: UserRole[];
}