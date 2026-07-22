// src/i18n/locales/en/affectations.ts

import type { AffectationsTranslationType } from "@shared/types/affectationsTranslation.types";

export const affectations: AffectationsTranslationType = {
    header: {
        title: "Assignments",
        subtitle: "Manage employee assignments to projects",
        addButton: "Add assignment",
    },

    filters: {
        searchPlaceholder: "Search by employee, project, client or mission...",
        allStatuses: "All statuses",
    },

    table: {
        employee: "Employee",
        project: "Project",
        client: "Client",
        mission: "Mission",
        status: "Status",
        startDate: "Start date",
        endDate: "End date",
        actions: "Actions",
    },

    status: {
        active: "Active",
        completed: "Completed",
        cancelled: "Cancelled",
    },

    emptyState: {
        noAffectations: "No assignments found.",
    },
};