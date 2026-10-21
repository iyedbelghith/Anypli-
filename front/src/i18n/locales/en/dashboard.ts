import type { DashboardTranslationType } from "@shared/types/dashboardTranslation.types";

export const dashboard: DashboardTranslationType = {
    common: {
        dashboard: "Dashboard",
        users: "Users",
        clients: "Clients",
        projects: "Projects",
        affectations: "Assignments",
        logout: "Logout",
        search: "Search...",
        welcome: "Welcome",
    },

    kpi: {
        totalClients: "Total clients",
        totalProjects: "Total projects",
        projectsInProgress: "Projects in progress",
        activeEmployees: "Active employees",
    },

    sections: {
        projectsOverview: "Projects overview",
        recentActivity: "Recent activity",
        noRecentActivity: "No recent activity yet.",
        chartPlaceholder: "Chart placeholder",
        viewAll: "View all →",
        statusDistribution: "Status distribution",
        recentProjects: "Recent projects",
    },
};