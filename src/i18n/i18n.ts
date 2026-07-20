import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import frAuth from "./locales/fr/auth.json";
import frDashboard from "./locales/fr/dashboard.json";
import frCommon from "./locales/fr/common.json";

import enAuth from "./locales/en/auth.json";
import enDashboard from "./locales/en/dashboard.json";
import enCommon from "./locales/en/common.json";

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            auth: frAuth,
            dashboard: frDashboard,
            common: frCommon,
        },
        en: {
            auth: enAuth,
            dashboard: enDashboard,
            common: enCommon,
        },
    },

    lng: "fr",
    fallbackLng: "fr",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;