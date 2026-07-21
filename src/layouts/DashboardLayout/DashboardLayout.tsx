import { Box } from "@mui/material";

import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";

import type { DashboardLayoutProps } from "./DashboardlayoutInterface";
import { dashboardLayoutStyles } from "./DashboardLayoutStyle";

export default function DashboardLayout({
    children,
    title,
}: DashboardLayoutProps) {
    return (
        <Box sx={dashboardLayoutStyles.root}>
            <Sidebar />

            <TopNavbar title={title} />

            <Box component="main" sx={dashboardLayoutStyles.main}>
                {children}
            </Box>
        </Box>
    );
}