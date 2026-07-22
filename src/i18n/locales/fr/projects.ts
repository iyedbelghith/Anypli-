// src/i18n/locales/fr/projects.ts

import type { ProjectsTranslationType } from "@shared/types/projectsTranslation.types";

export const projects: ProjectsTranslationType = {
    header: {
        title: "Projets",
        subtitle: "Gestion des projets de la plateforme",
        addButton: "Ajouter projet",
    },

    filters: {
        searchPlaceholder: "Rechercher par projet, client ou responsable...",
        allStatuses: "Tous les statuts",
    },

    table: {
        project: "Projet",
        client: "Client",
        manager: "Responsable",
        status: "Statut",
        startDate: "Date début",
        endDate: "Date fin",
        actions: "Actions",
    },

    status: {
        study: "En étude",
        in_progress: "En cours",
        completed: "Réalisé",
        cancelled: "Annulé",
    },

    emptyState: {
        noProjects: "Aucun projet trouvé.",
    },
};