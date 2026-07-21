import { Box, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

import DashboardLayout from "@layouts/DashboardLayout/DashboardLayouts";
import KpiCard from "@shared/components/KpiCard";

import { dashboardTranslation } from "@constants/dashboard/dashboardTranslation";

import {
    dashboardGridSizes,
    dashboardPageStyles,
} from "./DashboardPageStyle";
import {
    dashboardActivities,
    dashboardChartData,
    dashboardProjects,
    dashboardStatusData,
} from "./DashboardPageData";

export default function DashboardPage() {
    const { t } = useTranslation();
    

    return (
        <DashboardLayout title={t(dashboardTranslation.common.dashboard)}>
            <Grid container spacing={3}>
                <Grid size={dashboardGridSizes.kpiCard}>
                    <KpiCard
                        title={t(dashboardTranslation.kpi.totalClients)}
                        value={5}
                        trend="↑ 12% ce mois"
                        icon={<BusinessOutlinedIcon />}
                    />
                </Grid>

                <Grid size={dashboardGridSizes.kpiCard}>
                    <KpiCard
                        title={t(dashboardTranslation.kpi.totalProjects)}
                        value={7}
                        trend="↑ 8% ce mois"
                        icon={<FolderOutlinedIcon />}
                    />
                </Grid>

                <Grid size={dashboardGridSizes.kpiCard}>
                    <KpiCard
                        title={t(dashboardTranslation.kpi.projectsInProgress)}
                        value={3}
                        trend="↓ 5% ce mois"
                        trendType="negative"
                        icon={<AccessTimeOutlinedIcon />}
                    />
                </Grid>

                <Grid size={dashboardGridSizes.kpiCard}>
                    <KpiCard
                        title={t(dashboardTranslation.kpi.activeEmployees)}
                        value={3}
                        trend="↑ 3% ce mois"
                        icon={<GroupAddOutlinedIcon />}
                    />
                </Grid>

                <Grid size={dashboardGridSizes.mainChart}>
                    <Paper sx={dashboardPageStyles.sectionCard}>
                        <Box sx={dashboardPageStyles.sectionHeader}>
                            <Typography variant="h6" sx={dashboardPageStyles.sectionTitle}>
                                {t(dashboardTranslation.sections.projectsOverview)}
                            </Typography>

                            <Box sx={dashboardPageStyles.yearBadge}>2025</Box>
                        </Box>

                        <Box sx={dashboardPageStyles.barChartPlaceholder}>
                            <Box sx={dashboardPageStyles.chartBars}>
                                {dashboardChartData.map((item) => (
                                    <Box key={item.month} sx={dashboardPageStyles.chartBarGroup}>
                                        <Box sx={dashboardPageStyles.chartBarPair}>
                                            <Box
                                                sx={{
                                                    ...dashboardPageStyles.projectBar,
                                                    height: item.projects * 35,
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    ...dashboardPageStyles.clientBar,
                                                    height: Math.max(item.clients, 1) * 28,
                                                }}
                                            />
                                        </Box>

                                        <Typography variant="caption" color="text.secondary">
                                            {item.month}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Box sx={dashboardPageStyles.chartLegend}>
                                <Box sx={dashboardPageStyles.legendItem}>
                                    <Box sx={dashboardPageStyles.clientDot} />
                                    <Typography variant="body2">Clients</Typography>
                                </Box>

                                <Box sx={dashboardPageStyles.legendItem}>
                                    <Box sx={dashboardPageStyles.projectDot} />
                                    <Typography variant="body2">Projets</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid size={dashboardGridSizes.sideChart}>
                    <Paper sx={dashboardPageStyles.sectionCard}>
                        <Typography variant="h6" sx={dashboardPageStyles.sectionTitle}>
                            {t(dashboardTranslation.sections.statusDistribution)}
                        </Typography>

                        <Box sx={dashboardPageStyles.donutPlaceholder}>
                            <Box sx={dashboardPageStyles.donutChart} />
                        </Box>

                        <Box sx={dashboardPageStyles.statusList}>
                            <Box sx={dashboardPageStyles.statusRow}>
                                <Box sx={dashboardPageStyles.blueDot} />
                                <Typography variant="body2">En cours</Typography>
                                <Typography variant="body2" sx={dashboardPageStyles.statusValue}>
                                    3
                                </Typography>
                            </Box>

                            <Box sx={dashboardPageStyles.statusRow}>
                                <Box sx={dashboardPageStyles.orangeDot} />
                                <Typography variant="body2">En étude</Typography>
                                <Typography variant="body2" sx={dashboardPageStyles.statusValue}>
                                    2
                                </Typography>
                            </Box>

                            <Box sx={dashboardPageStyles.statusRow}>
                                <Box sx={dashboardPageStyles.greenDot} />
                                <Typography variant="body2">Réalisé</Typography>
                                <Typography variant="body2" sx={dashboardPageStyles.statusValue}>
                                    2
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid size={dashboardGridSizes.recentProjects}>
                    <Paper sx={dashboardPageStyles.sectionCard}>
                        <Box sx={dashboardPageStyles.sectionHeader}>
                            <Typography variant="h6" sx={dashboardPageStyles.sectionTitle}>
                                {t(dashboardTranslation.sections.recentProjects)}
                            </Typography>

                            <Typography variant="body2" sx={dashboardPageStyles.viewAll}>
                                {t(dashboardTranslation.sections.viewAll)}
                            </Typography>
                        </Box>

                        <Box sx={dashboardPageStyles.projectsList}>
                            {dashboardProjects.map((project) => (
                                <Box key={project.title} sx={dashboardPageStyles.projectRow}>
                                    <Box sx={dashboardPageStyles.projectIcon}>
                                        <FolderOutlinedIcon fontSize="small" />
                                    </Box>

                                    <Box sx={dashboardPageStyles.projectInfo}>
                                        <Typography sx={dashboardPageStyles.projectTitle}>
                                            {project.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            {project.client}
                                        </Typography>
                                    </Box>

                                    <Box sx={dashboardPageStyles.projectStatus}>
                                        {project.status}
                                    </Box>

                                    <Typography variant="body2" color="text.secondary">
                                        {project.date}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>

                <Grid size={dashboardGridSizes.recentActivity}>
                    <Paper sx={dashboardPageStyles.sectionCard}>
                        <Typography variant="h6" sx={dashboardPageStyles.sectionTitle}>
                            {t(dashboardTranslation.sections.recentActivity)}
                        </Typography>

                        <Box sx={dashboardPageStyles.activityList}>
                            {dashboardActivities.map((activity, index) => (
                                <Box key={activity.title} sx={dashboardPageStyles.activityRow}>
                                    <Box sx={dashboardPageStyles.activityIcon}>
                                        <FolderOutlinedIcon fontSize="small" />
                                    </Box>

                                    <Box>
                                        <Typography variant="body2" sx={dashboardPageStyles.activityTitle}>
                                            {activity.title}
                                        </Typography>

                                        <Typography variant="caption" color="text.secondary">
                                            Admin User · Il y a {index + 1}h
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}