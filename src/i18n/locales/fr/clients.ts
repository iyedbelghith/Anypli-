// src/i18n/locales/fr/clients.ts

import type { ClientsTranslationType } from "@shared/types/clientsTranslation.types";

export const clients: ClientsTranslationType = {
    header: {
        title: "Clients",
        subtitle: "Gestion des clients de la plateforme",
        addButton: "Ajouter client",
    },

    filters: {
        searchPlaceholder: "Rechercher par nom, email ou société...",
        allStatuses: "Tous les statuts",
    },

    table: {
        client: "Client",
        email: "Email",
        phone: "Téléphone",
        company: "Société",
        status: "Statut",
        createdAt: "Date création",
        actions: "Actions",
    },

    status: {
        active: "Actif",
        inactive: "Inactif",
    },

    emptyState: {
        noClients: "Aucun client trouvé.",
    },
};