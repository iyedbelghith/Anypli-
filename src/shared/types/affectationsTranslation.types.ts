// src/shared/types/affectationsTranslation.types.ts

export type AffectationsTranslationType = {
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
        employee: string;
        project: string;
        client: string;
        mission: string;
        status: string;
        startDate: string;
        endDate: string;
        actions: string;
    };

    status: {
        active: string;
        completed: string;
        cancelled: string;
    };

    emptyState: {
        noAffectations: string;
    };
};