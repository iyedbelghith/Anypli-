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

    form: {
        name: "Nom du client",
        email: "Email",
        phone: "Téléphone",
        company: "Société",
        status: "Statut",
        cancel: "Annuler",
        save: "Enregistrer",
        update: "Modifier",
    },

    dialog: {
        addTitle: "Ajouter un client",
        editTitle: "Modifier un client",
    },
};
