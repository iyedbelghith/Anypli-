import {
    AppBar,
    Avatar,
    Box,
    Button,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { dashboardTranslation } from "@constants/dashboard/dashboardTranslation";

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { DASHBOARD_NAV_ITEMS } from "@constants/navigation";
import { useAuthState, useLogout } from "@features/auth/hooks";
import LanguageSwitcher from "@shared/components/LanguageSwitcher";

import anypliLogo from "../../assets/images/anypli-logo.png";

import type { DashboardLayoutProps } from "./DashboardlayoutInterface";
import { dashboardLayoutStyles } from "./DashboardLayoutStyle";

export default function DashboardLayout({
    children,
    title,
}: DashboardLayoutProps) {
    const location = useLocation();
    const { t } = useTranslation();

    const { user } = useAuthState();
    const { logout, isLoading } = useLogout();

    const navItems = DASHBOARD_NAV_ITEMS.filter((item) => {
        if (!user) {
            return false;
        }

        return item.allowedRoles.some((role) => role === user.role);
    });

    return (
        <Box sx={dashboardLayoutStyles.root}>
            <Drawer variant="permanent" sx={dashboardLayoutStyles.drawer}>
                <Box sx={dashboardLayoutStyles.logoContainer}>
                    <Box
                        component="img"
                        src={anypliLogo}
                        alt="Anypli logo"
                        sx={dashboardLayoutStyles.logo}
                    />
                </Box>

                <List sx={dashboardLayoutStyles.navList}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <ListItemButton
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{
                                    ...dashboardLayoutStyles.navItem,
                                    ...(isActive ? dashboardLayoutStyles.activeNavItem : {}),
                                }}
                            >
                                <ListItemText primary={t(item.label)} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Drawer>

            <AppBar position="fixed" sx={dashboardLayoutStyles.appBar}>
                <Toolbar sx={dashboardLayoutStyles.toolbar}>
                    <Typography variant="h6" sx={dashboardLayoutStyles.pageTitle}>
                        {title}
                    </Typography>

                    <Box sx={dashboardLayoutStyles.userBox}>
                        <LanguageSwitcher />

                        <Avatar>
                            {user?.name?.charAt(0).toUpperCase() ?? "U"}
                        </Avatar>

                        <Typography variant="body2">
                            {user?.name}
                        </Typography>

                        <Button
                            variant="outlined"
                            color="error"
                            onClick={logout}
                            disabled={isLoading}
                            sx={dashboardLayoutStyles.logoutButton}>
                            {t(dashboardTranslation.common.logout)}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="main" sx={dashboardLayoutStyles.main}>
                {children}
            </Box>
        </Box>
    );
}