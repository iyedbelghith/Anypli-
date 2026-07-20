import { ROUTES } from "@constants/routes";
import { USER_ROLES } from "@constants/roles";

export const DASHBOARD_NAV_ITEMS = [
    {
        labelKey: "dashboard",
        path: ROUTES.DASHBOARD,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.EMPLOYEE, USER_ROLES.CLIENT],
    },
    {
        labelKey: "users",
        path: ROUTES.USERS,
        allowedRoles: [USER_ROLES.ADMIN],
    },
    {
        labelKey: "clients",
        path: ROUTES.CLIENTS,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.EMPLOYEE],
    },
    {
        labelKey: "projects",
        path: ROUTES.PROJECTS,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.EMPLOYEE],
    },
    {
        labelKey: "affectations",
        path: ROUTES.AFFECTATIONS,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.EMPLOYEE],
    },
] as const;