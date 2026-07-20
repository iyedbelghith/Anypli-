import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    Alert,
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import { ROUTES } from "@constants/routes";
import { useLogin } from "@features/auth/hooks";

import type { LoginForm } from "./LoginPageInterface";
import { loginPageStyles } from "./LoginPageStyle";

export default function LoginPage() {
    const navigate = useNavigate();
    const { t } = useTranslation("auth");

    const { login, isLoading } = useLogin();

    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage("");

        try {
            await login(form);
            navigate(ROUTES.DASHBOARD);
        } catch {
            setErrorMessage(t("loginError"));
        }
    };

    return (
        <Box sx={loginPageStyles.page}>
            <Paper elevation={4} sx={loginPageStyles.card}>
                <Typography variant="h4" sx={loginPageStyles.title}>
                    {t("loginTitle")}
                </Typography>

                {errorMessage && (
                    <Alert severity="error" sx={{ marginBottom: 2 }}>
                        {errorMessage}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} sx={loginPageStyles.form}>
                    <TextField
                        name="email"
                        type="email"
                        label={t("email")}
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        required
                    />

                    <TextField
                        name="password"
                        type="password"
                        label={t("password")}
                        value={form.password}
                        onChange={handleChange}
                        fullWidth
                        required
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isLoading}
                        sx={loginPageStyles.button}
                    >
                        {isLoading ? t("loginLoading") : t("loginButton")}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}