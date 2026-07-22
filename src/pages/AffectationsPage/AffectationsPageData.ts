import type { AffectationTableItem } from "./AffectationsPageInterface";

// Temporary mock data used only for Affectations page UI design.
// These values will be replaced later by data from the Laravel API.
export const affectationsMockData: AffectationTableItem[] = [
    {
        id: 1,
        employee: "Karim Ben Ali",
        project: "CRM Renouveau",
        client: "Nexcore Solutions",
        mission: "Développement backend",
        status: "active",
        startDate: "2025-01-20",
        endDate: "2025-06-30",
    },
    {
        id: 2,
        employee: "Mariam Trabelsi",
        project: "Tableau de bord analytique",
        client: "TechVision SARL",
        mission: "Développement frontend",
        status: "active",
        startDate: "2025-03-05",
        endDate: "2025-09-15",
    },
    {
        id: 3,
        employee: "Admin User",
        project: "Portail RH Digital",
        client: "GlobalTech Industries",
        mission: "Gestion de projet",
        status: "completed",
        startDate: "2024-08-10",
        endDate: "2024-12-31",
    },
    {
        id: 4,
        employee: "Fatou Sow",
        project: "Application Mobile Client",
        client: "Innova Finance",
        mission: "Tests et validation",
        status: "cancelled",
        startDate: "2025-02-20",
        endDate: "2025-05-20",
    },
];