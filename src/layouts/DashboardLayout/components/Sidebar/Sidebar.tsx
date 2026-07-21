import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { DASHBOARD_NAV_ITEMS } from "@constants/navigation";
import { ROUTES } from "@constants/routes";
import { useAuthState } from "@features/auth/hooks";

import anypliLogo from "../../../../assets/images/anypli-logo.png";

import { sidebarStyles } from "./SidebarStyle";

const navigationIconMap = {
    [ROUTES.DASHBOARD]: <DashboardOutlinedIcon />,
    [ROUTES.USERS]: <GroupOutlinedIcon />,
    [ROUTES.CLIENTS]: <BusinessOutlinedIcon />,
    [ROUTES.PROJECTS]: <FolderOutlinedIcon />,
    [ROUTES.AFFECTATIONS]: <AccountTreeOutlinedIcon />,
} as const;

export default function Sidebar() {
    const location = useLocation();
    const { t } = useTranslation();
    const { user } = useAuthState();

    const navItems = DASHBOARD_NAV_ITEMS.filter((item) => {
        if (!user) return false;
        return item.allowedRoles.some((role) => role === user.role);
    });

    return (
        <Drawer variant="permanent" sx={sidebarStyles.drawer}>
            <Box sx={sidebarStyles.container}>
                <Box sx={sidebarStyles.logoContainer}>
                    <Box sx={sidebarStyles.logoBox}>
                        <Box
                            component="img"
                            src={anypliLogo}
                            alt="Anypli"
                            sx={sidebarStyles.logo}
                        />
                    </Box>

                    <Typography sx={sidebarStyles.brandName}>
                        Project Manager
                    </Typography>
                </Box>

                <Typography sx={sidebarStyles.menuLabel}>Menu</Typography>

                <List sx={sidebarStyles.navList}>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <ListItemButton
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{
                                    ...sidebarStyles.navItem,
                                    ...(isActive ? sidebarStyles.activeNavItem : {}),
                                }}
                            >
                                <ListItemIcon sx={sidebarStyles.navIcon}>
                                    {navigationIconMap[item.path]}
                                </ListItemIcon>

                                <ListItemText
                                    primary={t(item.label)}
                                    sx={sidebarStyles.navText}
                                />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Box>
        </Drawer>
    );
}