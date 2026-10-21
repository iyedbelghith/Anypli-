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

    dialog: {
        title: string;
        addTitle: string;
        editTitle: string;
        fields: {
            name: string;
            prenom: string;
            email: string;
            telephone: string;
            role: string;
            status: string;
        };
        actions: {
            cancel: string;
            submit: string;
        };
    };

    form: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        password: string;
        role: string;
        status: string;
        cancel: string;
        save: string;
        update: string;
    };
    emptyState: {
        noUsers: string;
    };
};
