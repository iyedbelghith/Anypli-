import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

import DashboardLayout from "@layouts/DashboardLayout/DashboardLayout";
import KpiCard from "@shared/components/KpiCard";

import { dashboardTranslation } from "@constants/dashboard/dashboardTranslation";

import MonthlyOverviewCard from "./components/MonthlyOverviewCard";
import StatusDistributionCard from "./components/StatusDistributionCard";
import RecentProjectsCard from "./components/RecentProjectsCard";
import RecentActivityCard from "./components/RecentActivityCard";

import {
    dashboardActivities,
    dashboardChartData,
    dashboardProjects,
    dashboardStatusData,
} from "./DashboardPageData";

import { dashboardGridSizes } from "./DashboardPageStyle";

export default function DashboardPage() {
    const { t } = useTranslation();

    const kpiCards = [
        {
            title: t(dashboardTranslation.kpi.totalClients),
            value: 5,
            trend: "↑ 12% ce mois",
            icon: <BusinessOutlinedIcon />,
        },
        {
            title: t(dashboardTranslation.kpi.totalProjects),
            value: 7,
            trend: "↑ 8% ce mois",
            icon: <FolderOutlinedIcon />,
        },
        {
            title: t(dashboardTranslation.kpi.projectsInProgress),
            value: 3,
            trend: "↓ 5% ce mois",
            trendType: "negative" as const,
            icon: <AccessTimeOutlinedIcon />,
        },
        {
            title: t(dashboardTranslation.kpi.activeEmployees),
            value: 3,
            trend: "↑ 3% ce mois",
            icon: <GroupAddOutlinedIcon />,
        },
    ];

    return (
        <DashboardLayout title={t(dashboardTranslation.common.dashboard)}>
            <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
                {kpiCards.map((kpiCard) => (
                    <Grid
                        key={kpiCard.title}
                        size={dashboardGridSizes.kpiCard}
                        sx={{ display: "flex" }}
                    >
                        <KpiCard
                            title={kpiCard.title}
                            value={kpiCard.value}
                            trend={kpiCard.trend}
                            trendType={kpiCard.trendType}
                            icon={kpiCard.icon}
                        />
                    </Grid>
                ))}

                <Grid size={dashboardGridSizes.mainChart} sx={{ display: "flex" }}>
                    <MonthlyOverviewCard
                        title={t(dashboardTranslation.sections.projectsOverview)}
                        year="2025"
                        chartData={dashboardChartData}
                        clientsLabel={t(dashboardTranslation.common.clients)}
                        projectsLabel={t(dashboardTranslation.common.projects)}
                    />
                </Grid>

                <Grid size={dashboardGridSizes.sideChart} sx={{ display: "flex" }}>
                    <StatusDistributionCard
                        title={t(dashboardTranslation.sections.statusDistribution)}
                        statusData={dashboardStatusData}
                    />
                </Grid>

                <Grid size={dashboardGridSizes.recentProjects} sx={{ display: "flex" }}>
                    <RecentProjectsCard
                        title={t(dashboardTranslation.sections.recentProjects)}
                        viewAllLabel={t(dashboardTranslation.sections.viewAll)}
                        projects={dashboardProjects}
                    />
                </Grid>

                <Grid size={dashboardGridSizes.recentActivity} sx={{ display: "flex" }}>
                    <RecentActivityCard
                        title={t(dashboardTranslation.sections.recentActivity)}
                        activities={dashboardActivities}
                    />
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}