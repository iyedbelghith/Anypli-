import type { UsersTranslationType } from "@shared/types/usersTranslation.types";

export const users: UsersTranslationType = {
    header: {
        title: "Utilisateurs",
        subtitle: "Gestion des utilisateurs de la plateforme",
        addButton: "Ajouter utilisateur",
    },

    filters: {
        searchPlaceholder: "Rechercher par nom ou email...",
        allRoles: "Tous les rôles",
    },

    table: {
        user: "Utilisateur",
        email: "Email",
        phone: "Téléphone",
        role: "Rôle",
        status: "Statut",
        createdAt: "Date création",
        actions: "Actions",
    },

    roles: {
        admin: "Admin",
        employe: "Employé",
        client: "Client",
    },

    status: {
        active: "Actif",
        inactive: "Inactif",
    },

    dialog: {
        title: "Ajouter un utilisateur",
        addTitle: "Ajouter un utilisateur",
        editTitle: "Modifier un utilisateur",
        fields: {
            name: "Nom",
            prenom: "Prénom",
            email: "Email",
            telephone: "Téléphone",
            role: "Rôle",
            status: "Statut",
        },
        actions: {
            cancel: "Annuler",
            submit: "Ajouter",
        },
    },

    form: {
        firstName: "Nom",
        lastName: "Prénom",
        email: "Email",
        phone: "Téléphone",
        password: "Mot de passe",
        role: "Rôle",
        status: "Statut",
        cancel: "Annuler",
        save: "Ajouter",
        update: "Modifier",
    },
    emptyState: {
        noUsers: "Aucun utilisateur trouvé.",
    },
};
