import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { auth as frAuth } from "./locales/fr/auth";
import { dashboard as frDashboard } from "./locales/fr/dashboard";

import { auth as enAuth } from "./locales/en/auth";
import { dashboard as enDashboard } from "./locales/en/dashboard";

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: {
                auth: frAuth,
                dashboard: frDashboard,
            },
        },

        en: {
            translation: {
                auth: enAuth,
                dashboard: enDashboard,
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