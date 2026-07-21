

import type { UsersTranslationType } from "@shared/types/usersTranslation.types";

export const users: UsersTranslationType = {
    header: {
        title: "Users",
        subtitle: "Manage platform users",
        addButton: "Add user",
    },

    filters: {
        searchPlaceholder: "Search by name or email...",
        allRoles: "All roles",
    },

    table: {
        user: "User",
        email: "Email",
        phone: "Phone",
        role: "Role",
        status: "Status",
        createdAt: "Created at",
        actions: "Actions",
    },

    roles: {
        admin: "Admin",
        employe: "Employee",
        client: "Client",
    },

    status: {
        active: "Active",
        inactive: "Inactive",
    },
};