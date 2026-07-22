// src/constants/affectations/affectationsTranslation.ts

import type { AffectationsTranslationType } from "@shared/types/affectationsTranslation.types";

export const affectationsTranslation: AffectationsTranslationType = {
    header: {
        title: "affectations.header.title",
        subtitle: "affectations.header.subtitle",
        addButton: "affectations.header.addButton",
    },

    filters: {
        searchPlaceholder: "affectations.filters.searchPlaceholder",
        allStatuses: "affectations.filters.allStatuses",
    },

    table: {
        employee: "affectations.table.employee",
        project: "affectations.table.project",
        client: "affectations.table.client",
        mission: "affectations.table.mission",
        status: "affectations.table.status",
        startDate: "affectations.table.startDate",
        endDate: "affectations.table.endDate",
        actions: "affectations.table.actions",
    },

    status: {
        active: "affectations.status.active",
        completed: "affectations.status.completed",
        cancelled: "affectations.status.cancelled",
    },

    emptyState: {
        noAffectations: "affectations.emptyState.noAffectations",
    },
};