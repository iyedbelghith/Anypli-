import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    Alert,
    Box,
    Button,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { ROUTES } from "@constants/routes";
import { authTranslation } from "@constants/auth/authTranslation";
import { useLogin } from "@features/auth/hooks";
import LanguageSwitcher from "@shared/components/LanguageSwitcher";

import anypliLogo from "../../assets/images/anypli-logo.png";

import type { LoginForm, LoginFormField } from "./LoginPageInterface";
import { loginPageStyles } from "./LoginPageStyle";

export default function LoginPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { login, isLoading } = useLogin();

    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as LoginFormField;

        setForm({
            ...form,
            [fieldName]: event.target.value,
        });
    };

    const handleTogglePassword = () => {
        setShowPassword((currentValue) => !currentValue);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage("");

        try {
            await login(form);
            navigate(ROUTES.DASHBOARD);
        } catch {
            setErrorMessage(t(authTranslation.login.loginError));
        }
    };

    return (
        <Box sx={loginPageStyles.page}>
            <Box sx={loginPageStyles.leftSection}>
                <Box sx={loginPageStyles.gridOverlay} />
                <Box sx={loginPageStyles.circleOne} />
                <Box sx={loginPageStyles.circleTwo} />
                <Box sx={loginPageStyles.circleThree} />

                <Box sx={loginPageStyles.brandHeader}>
                    <Box sx={loginPageStyles.logoBox}>
                        <Box
                            component="img"
                            src={anypliLogo}
                            alt="Anypli"
                            sx={loginPageStyles.logo}
                        />
                    </Box>

                    <Typography sx={loginPageStyles.appName}>
                        {t(authTranslation.branding.appName)}
                    </Typography>
                </Box>

                <Box sx={loginPageStyles.brandContent}>
                    <Typography sx={loginPageStyles.title}>
                        {t(authTranslation.branding.titleLineOne)}
                        <Box component="span" sx={loginPageStyles.titleHighlight}>
                            {t(authTranslation.branding.titleHighlight)}
                        </Box>
                    </Typography>

                    <Typography sx={loginPageStyles.description}>
                        {t(authTranslation.branding.description)}
                    </Typography>

                    <Box sx={loginPageStyles.featuresList}>
                        <Box sx={loginPageStyles.featureItem}>
                            <Box sx={loginPageStyles.checkCircle}>✓</Box>
                            {t(authTranslation.branding.featureClients)}
                        </Box>

                        <Box sx={loginPageStyles.featureItem}>
                            <Box sx={loginPageStyles.checkCircle}>✓</Box>
                            {t(authTranslation.branding.featureProjects)}
                        </Box>

                        <Box sx={loginPageStyles.featureItem}>
                            <Box sx={loginPageStyles.checkCircle}>✓</Box>
                            {t(authTranslation.branding.featureAssignments)}
                        </Box>
                    </Box>
                </Box>

                <Box sx={loginPageStyles.leftFooter}>
                    {t(authTranslation.branding.copyright)}
                </Box>
            </Box>

            <Box sx={loginPageStyles.rightSection}>
                <Box sx={loginPageStyles.languageWrapper}>
                    <LanguageSwitcher />
                </Box>

                <Paper elevation={0} sx={loginPageStyles.loginCard}>
                    <Typography variant="h4" sx={loginPageStyles.loginTitle}>
                        {t(authTranslation.login.title)}
                    </Typography>

                    <Typography variant="body1" sx={loginPageStyles.loginSubtitle}>
                        {t(authTranslation.login.subtitle)}
                    </Typography>

                    {errorMessage && (
                        <Alert severity="error" sx={loginPageStyles.error}>
                            {errorMessage}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit} sx={loginPageStyles.form}>
                        <TextField
                            name="email"
                            type="email"
                            label={t(authTranslation.login.email)}
                            value={form.email}
                            onChange={handleChange}
                            placeholder="admin@anypli.com"
                            fullWidth
                            required
                            sx={loginPageStyles.textField}
                        />

                        <TextField
                            name="password"
                            type={showPassword ? "text" : "password"}
                            label={t(authTranslation.login.password)}
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            fullWidth
                            required
                            sx={loginPageStyles.textField}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleTogglePassword} edge="end">
                                                {showPassword ? (
                                                    <VisibilityOffOutlinedIcon />
                                                ) : (
                                                    <VisibilityOutlinedIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isLoading}
                            sx={loginPageStyles.button}
                        >
                            {isLoading
                                ? t(authTranslation.login.loginLoading)
                                : t(authTranslation.login.loginButton)}
                        </Button>
                    </Box>

                    <Typography sx={loginPageStyles.demoText}>
                        {t(authTranslation.login.demoCredentials)}
                    </Typography>
                </Paper>

                <Box sx={loginPageStyles.rightFooter}>
                    {t(authTranslation.branding.copyright)}
                </Box>
            </Box>
        </Box>
    );
}