import { Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import { languageSwitcherStyles } from "./LanguageSwitcherStyle";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <Stack direction="row" spacing={1}>
            <Button
                size="small"
                variant={i18n.language === "fr" ? "contained" : "outlined"}
                sx={languageSwitcherStyles.button}
                onClick={() => changeLanguage("fr")}
            >
                FR
            </Button>

            <Button
                size="small"
                variant={i18n.language === "en" ? "contained" : "outlined"}
                sx={languageSwitcherStyles.button}
                onClick={() => changeLanguage("en")}
            >
                EN
            </Button>
        </Stack>
    );
}