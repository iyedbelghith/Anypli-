// src/i18n/locales/en/projects.ts

import type { ProjectsTranslationType } from "@shared/types/projectsTranslation.types";

export const projects: ProjectsTranslationType = {
    header: {
        title: "Projects",
        subtitle: "Manage platform projects",
        addButton: "Add project",
    },

    filters: {
        searchPlaceholder: "Search by project, client or manager...",
        allStatuses: "All statuses",
    },

    table: {
        project: "Project",
        client: "Client",
        manager: "Manager",
        status: "Status",
        startDate: "Start date",
        endDate: "End date",
        actions: "Actions",
    },

    status: {
        study: "Study",
        in_progress: "In progress",
        completed: "Completed",
        cancelled: "Cancelled",
    },

    emptyState: {
        noProjects: "No projects found.",
    },
    form: {
        title: "Project title",
        client: "Client",
        manager: "Manager",
        status: "Status",
        startDate: "Start date",
        endDate: "End date",
        cancel: "Cancel",
        save: "Save",
    },

    dialog: {
        addTitle: "Add project",
    },
};