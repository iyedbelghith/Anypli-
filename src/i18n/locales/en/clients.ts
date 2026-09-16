import type { ClientsTranslationType } from "@shared/types/clientsTranslation.types";

export const clients: ClientsTranslationType = {
    header: {
        title: "Clients",
        subtitle: "Manage platform clients",
        addButton: "Add client",
    },

    filters: {
        searchPlaceholder: "Search by name, email or company...",
        allStatuses: "All statuses",
    },

    table: {
        client: "Client",
        email: "Email",
        phone: "Phone",
        company: "Company",
        status: "Status",
        createdAt: "Created at",
        actions: "Actions",
    },

    status: {
        active: "Active",
        inactive: "Inactive",
    },

    emptyState: {
        noClients: "No clients found.",
    },

    form: {
        name: "Client name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        status: "Status",
        cancel: "Cancel",
        save: "Save",
        update: "Update",
    },

    dialog: {
        addTitle: "Add client",
        editTitle: "Edit client",
    },
};
