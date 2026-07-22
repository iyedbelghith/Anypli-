// src/shared/types/projectsTranslation.types.ts

export type ProjectsTranslationType = {
    header: {
        title: string;
        subtitle: string;
        addButton: string;
    };

    filters: {
        searchPlaceholder: string;
        allStatuses: string;
    };

    table: {
        project: string;
        client: string;
        manager: string;
        status: string;
        startDate: string;
        endDate: string;
        actions: string;
    };

    status: {
        study: string;
        in_progress: string;
        completed: string;
        cancelled: string;
    };

    emptyState: {
        noProjects: string;
    };
};