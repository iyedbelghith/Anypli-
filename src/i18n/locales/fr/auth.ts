import type { AuthTranslationType } from "@shared/types/authTranslation.types";

export const auth: AuthTranslationType = {
    login: {
        title: "Bienvenue",
        subtitle: "Connectez-vous à votre espace de gestion",
        email: "Email",
        password: "Mot de passe",
        loginButton: "Se connecter",
        loginLoading: "Connexion...",
        loginError: "Email ou mot de passe incorrect",
        demoCredentials: "Identifiants de démonstration : user@anypli.com / password",
    },

    branding: {
        appName: "Project Manager",
        titleLineOne: "Gérez vos projets",
        titleHighlight: "efficacement.",
        description:
            "Gérez vos clients, projets, équipes et affectations depuis une seule plateforme.",
        featureClients: "Gestion des clients et utilisateurs",
        featureProjects: "Suivi des projets en temps réel",
        featureAssignments: "Affectation intelligente des équipes",
        copyright: "© 2025 Anypli. Tous droits réservés.",
    },
};