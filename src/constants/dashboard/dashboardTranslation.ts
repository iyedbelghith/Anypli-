import type { DashboardTranslationType } from "@shared/types/dashboardTranslation.types";

export const dashboardTranslation: DashboardTranslationType = {
    common: {
        dashboard: "dashboard.common.dashboard",
        users: "dashboard.common.users",
        clients: "dashboard.common.clients",
        projects: "dashboard.common.projects",
        affectations: "dashboard.common.affectations",
        logout: "dashboard.common.logout",
        search: "dashboard.common.search",
        welcome: "dashboard.common.welcome",
    },

    kpi: {
        totalClients: "dashboard.kpi.totalClients",
        totalProjects: "dashboard.kpi.totalProjects",
        projectsInProgress: "dashboard.kpi.projectsInProgress",
        activeEmployees: "dashboard.kpi.activeEmployees",
    },

    sections: {
        projectsOverview: "dashboard.sections.projectsOverview",
        recentActivity: "dashboard.sections.recentActivity",
        noRecentActivity: "dashboard.sections.noRecentActivity",
        chartPlaceholder: "dashboard.sections.chartPlaceholder",
    },
};