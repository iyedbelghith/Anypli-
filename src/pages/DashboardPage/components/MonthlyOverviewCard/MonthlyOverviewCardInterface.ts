import type { DashboardChartItem } from "../../DashboardPageInterface";

export interface MonthlyOverviewCardProps {
    title: string;
    year: string;
    chartData: DashboardChartItem[];
    clientsLabel: string;
    projectsLabel: string;
}