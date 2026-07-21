export type UsersTranslationType = {
    header: {
        title: string;
        subtitle: string;
        addButton: string;
    };

    filters: {
        searchPlaceholder: string;
        allRoles: string;
    };

    table: {
        user: string;
        email: string;
        phone: string;
        role: string;
        status: string;
        createdAt: string;
        actions: string;
    };

    roles: {
        admin: string;
        employe: string;
        client: string;
    };

    status: {
        active: string;
        inactive: string;
    };
};