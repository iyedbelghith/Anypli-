export type DashboardTranslationType = {
    common: {
        dashboard: string;
        users: string;
        clients: string;
        projects: string;
        affectations: string;
        logout: string;
        search: string;
        welcome: string;
    };

    kpi: {
        totalClients: string;
        totalProjects: string;
        projectsInProgress: string;
        activeEmployees: string;
    };

    sections: {
        projectsOverview: string;
        recentActivity: string;
        noRecentActivity: string;
        chartPlaceholder: string;
    };
};