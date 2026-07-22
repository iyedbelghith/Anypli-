import type { UsersTranslationType } from "@shared/types/usersTranslation.types";

export const usersTranslation: UsersTranslationType = {
    header: {
        title: "users.header.title",
        subtitle: "users.header.subtitle",
        addButton: "users.header.addButton",
    },

    filters: {
        searchPlaceholder: "users.filters.searchPlaceholder",
        allRoles: "users.filters.allRoles",
    },

    table: {
        user: "users.table.user",
        email: "users.table.email",
        phone: "users.table.phone",
        role: "users.table.role",
        status: "users.table.status",
        createdAt: "users.table.createdAt",
        actions: "users.table.actions",
    },

    roles: {
        admin: "users.roles.admin",
        employe: "users.roles.employe",
        client: "users.roles.client",
    },

    status: {
        active: "users.status.active",
        inactive: "users.status.inactive",
    },

    dialog: {
        title: "users.dialog.title",
        fields: {
            name: "users.dialog.fields.name",
            prenom: "users.dialog.fields.prenom",
            email: "users.dialog.fields.email",
            telephone: "users.dialog.fields.telephone",
            role: "users.dialog.fields.role",
            status: "users.dialog.fields.status",
        },
        actions: {
            cancel: "users.dialog.actions.cancel",
            submit: "users.dialog.actions.submit",
        },
    },
};