import type { ClientsTranslationType } from "@shared/types/clientsTranslation.types";

export const clientsTranslation: ClientsTranslationType = {
    header: {
        title: "clients.header.title",
        subtitle: "clients.header.subtitle",
        addButton: "clients.header.addButton",
    },

    filters: {
        searchPlaceholder: "clients.filters.searchPlaceholder",
        allStatuses: "clients.filters.allStatuses",
    },

    table: {
        client: "clients.table.client",
        email: "clients.table.email",
        phone: "clients.table.phone",
        company: "clients.table.company",
        status: "clients.table.status",
        createdAt: "clients.table.createdAt",
        actions: "clients.table.actions",
    },

    status: {
        active: "clients.status.active",
        inactive: "clients.status.inactive",
    },

    emptyState: {
        noClients: "clients.emptyState.noClients",
    },

    form: {
        name: "clients.form.name",
        email: "clients.form.email",
        phone: "clients.form.phone",
        company: "clients.form.company",
        status: "clients.form.status",
        cancel: "clients.form.cancel",
        save: "clients.form.save",
        update: "clients.form.update",
    },

    dialog: {
        addTitle: "clients.dialog.addTitle",
        editTitle: "clients.dialog.editTitle",
    },
};
