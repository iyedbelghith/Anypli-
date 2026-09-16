export type ClientsTranslationType = {
    header: {
        title: string;
        subtitle: string;
        addButton: string;
    };

    filters: {
        searchPlaceholder: string;
        allStatuses: string;
    };

    table: {
        client: string;
        email: string;
        phone: string;
        company: string;
        status: string;
        createdAt: string;
        actions: string;
    };

    status: {
        active: string;
        inactive: string;
    };

    emptyState: {
        noClients: string;
    };

    form: {
        name: string;
        email: string;
        phone: string;
        company: string;
        status: string;
        cancel: string;
        save: string;
        update: string;
    };

    dialog: {
        addTitle: string;
        editTitle: string;
    };
};
