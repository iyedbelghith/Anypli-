// src/i18n/locales/fr/affectations.ts

import type { AffectationsTranslationType } from "@shared/types/affectationsTranslation.types";

export const affectations: AffectationsTranslationType = {
    header: {
        title: "Affectations",
        subtitle: "Gestion des affectations des employés aux projets",
        addButton: "Ajouter affectation",
    },

    filters: {
        searchPlaceholder: "Rechercher par employé, projet, client ou mission...",
        allStatuses: "Tous les statuts",
    },

    table: {
        employee: "Employé",
        project: "Projet",
        client: "Client",
        mission: "Mission",
        status: "Statut",
        startDate: "Date début",
        endDate: "Date fin",
        actions: "Actions",
    },

    status: {
        active: "Active",
        completed: "Terminée",
        cancelled: "Annulée",
    },

    emptyState: {
        noAffectations: "Aucune affectation trouvée.",
    },
};