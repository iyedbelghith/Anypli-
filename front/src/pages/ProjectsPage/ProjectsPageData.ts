import type { ProjectTableItem } from "./ProjectsPageInterface";


export const projectsMockData: ProjectTableItem[] = [
    {
        id: 1,
        title: "CRM Renouveau",
        client: "Nexcore Solutions",
        manager: "Karim Ben Ali",
        status: "in_progress",
        startDate: "2025-01-15",
        endDate: "2025-06-30",
    },
    {
        id: 2,
        title: "Tableau de bord analytique",
        client: "TechVision SARL",
        manager: "Mariam Trabelsi",
        status: "study",
        startDate: "2025-03-01",
        endDate: "2025-09-15",
    },
    {
        id: 3,
        title: "Portail RH Digital",
        client: "GlobalTech Industries",
        manager: "Admin User",
        status: "completed",
        startDate: "2024-08-10",
        endDate: "2024-12-31",
    },
    {
        id: 4,
        title: "Application Mobile Client",
        client: "Innova Finance",
        manager: "Fatou Sow",
        status: "cancelled",
        startDate: "2025-02-20",
        endDate: "2025-05-20",
    },
];