import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import DashboardLayout from "@layouts/DashboardLayout";
import { dashboardTranslation } from "@constants/dashboard/dashboardTranslation";

export default function ProjectsPage() {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t(dashboardTranslation.common.projects)}>
            <Paper sx={{ padding: 3, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    {t(dashboardTranslation.common.projects)}
                </Typography>

                <Typography color="text.secondary" sx={{ marginTop: 1 }}>
                    La liste des projets sera affichée ici.
                </Typography>
            </Paper>
        </DashboardLayout>
    );
}