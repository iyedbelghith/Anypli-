import {
    AppBar,
    Avatar,
    Box,
    Button,
    Toolbar,
    Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import { dashboardTranslation } from "@constants/dashboard/dashboardTranslation";
import { useAuthState, useLogout } from "@features/auth/hooks";
import LanguageSwitcher from "@shared/components/LanguageSwitcher";

import type { TopNavbarProps } from "./TopNavbarInterface";
import { topNavbarStyles } from "./TopNavbarStyle";

export default function TopNavbar({ title }: TopNavbarProps) {
    const { t } = useTranslation();
    const { user } = useAuthState();
    const { logout, isLoading } = useLogout();

    const userInitial = user?.name?.charAt(0).toUpperCase() ?? "U";

    return (
        <AppBar position="fixed" sx={topNavbarStyles.appBar}>
            <Toolbar sx={topNavbarStyles.toolbar}>
                <Typography variant="h5" sx={topNavbarStyles.title}>
                    {title}
                </Typography>

                <Box sx={topNavbarStyles.rightSection}>
                    <LanguageSwitcher />

                    <Avatar sx={topNavbarStyles.avatar}>{userInitial}</Avatar>

                    <Box sx={topNavbarStyles.userInfo}>
                        <Typography sx={topNavbarStyles.userName}>
                            {user?.name ?? "User"}
                        </Typography>

                        <Typography sx={topNavbarStyles.userRole}>
                            {user?.role ?? ""}
                        </Typography>
                    </Box>

                    <Button
                        variant="outlined"
                        color="error"
                        onClick={logout}
                        disabled={isLoading}
                        sx={topNavbarStyles.logoutButton}
                    >
                        {t(dashboardTranslation.common.logout)}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}