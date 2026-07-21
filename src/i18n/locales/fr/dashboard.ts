import type { DashboardTranslationType } from "@shared/types/dashboardTranslation.types";

export const dashboard: DashboardTranslationType = {
    common: {
        dashboard: "Tableau de bord",
        users: "Utilisateurs",
        clients: "Clients",
        projects: "Projets",
        affectations: "Affectations",
        logout: "Déconnexion",
        search: "Rechercher...",
        welcome: "Bienvenue",
    },

    kpi: {
        totalClients: "Total clients",
        totalProjects: "Total projets",
        projectsInProgress: "Projets en cours",
        activeEmployees: "Employés actifs",
    },

    sections: {
        projectsOverview: "Vue d’ensemble des projets",
        recentActivity: "Activité récente",
        noRecentActivity: "Aucune activité récente.",
        chartPlaceholder: "Emplacement du graphique",
        viewAll: "Voir tout →",
        recentProjects: "Projets récents",
        statusDistribution: "Répartition des statuts",
    },
};