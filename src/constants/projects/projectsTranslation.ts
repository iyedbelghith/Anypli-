// src/constants/projects/projectsTranslation.ts

import type { ProjectsTranslationType } from "@shared/types/projectsTranslation.types";

export const projectsTranslation: ProjectsTranslationType = {
    header: {
        title: "projects.header.title",
        subtitle: "projects.header.subtitle",
        addButton: "projects.header.addButton",
    },

    filters: {
        searchPlaceholder: "projects.filters.searchPlaceholder",
        allStatuses: "projects.filters.allStatuses",
    },

    table: {
        project: "projects.table.project",
        client: "projects.table.client",
        manager: "projects.table.manager",
        status: "projects.table.status",
        startDate: "projects.table.startDate",
        endDate: "projects.table.endDate",
        actions: "projects.table.actions",
    },

    status: {
        study: "projects.status.study",
        in_progress: "projects.status.in_progress",
        completed: "projects.status.completed",
        cancelled: "projects.status.cancelled",
    },

    emptyState: {
        noProjects: "projects.emptyState.noProjects",
    },
};