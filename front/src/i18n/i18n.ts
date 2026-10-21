import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { auth as frAuth } from "./locales/fr/auth";
import { dashboard as frDashboard } from "./locales/fr/dashboard";

import { auth as enAuth } from "./locales/en/auth";
import { dashboard as enDashboard } from "./locales/en/dashboard";

import { users as frUsers } from "./locales/fr/users";
import { users as enUsers } from "./locales/en/users";

import { clients as frClients } from "./locales/fr/clients";
import { clients as enClients } from "./locales/en/clients";

import { projects as frProjects } from "./locales/fr/projects";
import { projects as enProjects } from "./locales/en/projects";

import { affectations as frAffectations } from "./locales/fr/affectations";
import { affectations as enAffectations } from "./locales/en/affectations";


i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: {
                auth: frAuth,
                dashboard: frDashboard,
                users: frUsers,
                clients: frClients,
                projects: frProjects,
                affectations: frAffectations,
            },
        },

        en: {
            translation: {
                auth: enAuth,
                dashboard: enDashboard,
                users: enUsers,
                clients: enClients,
                projects: enProjects,
                affectations: enAffectations,
            },
        },
    },

    lng: "fr",
    fallbackLng: "fr",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;