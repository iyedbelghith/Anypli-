import { ROUTES } from "@constants/routes";
import { USER_ROLES } from "@constants/roles";
import { dashboardTranslation } from "@constants/dashboard/dashboardTranslation";

export const DASHBOARD_NAV_ITEMS = [
    {
        label: dashboardTranslation.common.dashboard,
        path: ROUTES.DASHBOARD,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.EMPLOYEE, USER_ROLES.CLIENT],
    },
    {
        label: dashboardTranslation.common.users,
        path: ROUTES.USERS,
        allowedRoles: [USER_ROLES.ADMIN],
    },
    {
        label: dashboardTranslation.common.clients,
        path: ROUTES.CLIENTS,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.EMPLOYEE],
    },
    {
        label: dashboardTranslation.common.projects,
        path: ROUTES.PROJECTS,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.EMPLOYEE],
    },
    {
        label: dashboardTranslation.common.affectations,
        path: ROUTES.AFFECTATIONS,
        allowedRoles: [USER_ROLES.ADMIN, USER_ROLES.EMPLOYEE],
    },
] as const;