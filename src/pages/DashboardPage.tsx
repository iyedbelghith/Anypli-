import { Box, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import DashboardLayout from "@layouts/DashboardLayout/DashboardLayouts";
import { dashboardTranslation } from "@constants/dashboard/dashboardTranslation";

export default function DashboardPage() {
    const { t } = useTranslation();

    return (
        <DashboardLayout title={t(dashboardTranslation.common.dashboard)}>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Paper sx={{ padding: 3, borderRadius: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            {t(dashboardTranslation.kpi.totalClients)}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            0
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <Paper sx={{ padding: 3, borderRadius: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            {t(dashboardTranslation.kpi.totalProjects)}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            0
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <Paper sx={{ padding: 3, borderRadius: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            {t(dashboardTranslation.kpi.projectsInProgress)}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            0
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <Paper sx={{ padding: 3, borderRadius: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            {t(dashboardTranslation.kpi.activeEmployees)}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            0
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 8 }}>
                    <Paper sx={{ padding: 3, borderRadius: 3, minHeight: 260 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {t(dashboardTranslation.sections.projectsOverview)}
                        </Typography>

                        <Box
                            sx={{
                                marginTop: 3,
                                minHeight: 180,
                                borderRadius: 2,
                                backgroundColor: "grey.100",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Typography color="text.secondary">
                                {t(dashboardTranslation.sections.chartPlaceholder)}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Paper sx={{ padding: 3, borderRadius: 3, minHeight: 260 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {t(dashboardTranslation.sections.recentActivity)}
                        </Typography>

                        <Typography sx={{ marginTop: 2 }} color="text.secondary">
                            {t(dashboardTranslation.sections.noRecentActivity)}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}