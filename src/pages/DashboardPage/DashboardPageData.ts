import type {
    DashboardActivity,
    DashboardChartItem,
    DashboardProject,
    DashboardStatusItem,
} from "./DashboardPageInterface";

export const dashboardProjects: DashboardProject[] = [
    {
        title: "CRM Renouveau",
        client: "Nexcore Solutions",
        status: "En cours",
        date: "2025-06-30",
    },
    {
        title: "Tableau de bord analytique",
        client: "TechVision SARL",
        status: "En étude",
        date: "2025-09-15",
    },
    {
        title: "Portail RH Digital",
        client: "GlobalTech Industries",
        status: "Réalisé",
        date: "2024-12-31",
    },
    {
        title: "Plateforme E-commerce",
        client: "Nexcore Solutions",
        status: "En cours",
        date: "2025-08-01",
    },
    {
        title: "Système de Reporting",
        client: "Innova Finance",
        status: "En étude",
        date: "2025-10-31",
    },
];

export const dashboardActivities: DashboardActivity[] = [
    {
        title: "Projet CRM Renouveau mis à jour",
        author: "Sarah Diallo",
        time: "Il y a 15 min",
    },
    {
        title: "Nouveau client Innova Finance ajouté",
        author: "Sarah Diallo",
        time: "Il y a 1h",
    },
    {
        title: "Affectation de Karim Benali au projet P5",
        author: "Admin User",
        time: "Il y a 2h",
    },
    {
        title: "Projet Infrastructure Cloud marqué Réalisé",
        author: "Karim Benali",
        time: "Il y a 3h",
    },
    {
        title: "Utilisateur Fatou Sow créé",
        author: "Admin User",
        time: "Hier 14:30",
    },
];

export const dashboardChartData: DashboardChartItem[] = [
    { month: "Jan", projects: 2, clients: 1 },
    { month: "Fév", projects: 3, clients: 2 },
    { month: "Mar", projects: 1, clients: 0 },
    { month: "Avr", projects: 4, clients: 1 },
    { month: "Mai", projects: 2, clients: 2 },
    { month: "Jun", projects: 3, clients: 1 },
    { month: "Jul", projects: 2, clients: 0 },
];

export const dashboardStatusData: DashboardStatusItem[] = [
    {
        label: "En cours",
        value: 3,
        color: "blue",
    },
    {
        label: "En étude",
        value: 2,
        color: "orange",
    },
    {
        label: "Réalisé",
        value: 2,
        color: "green",
    },
];