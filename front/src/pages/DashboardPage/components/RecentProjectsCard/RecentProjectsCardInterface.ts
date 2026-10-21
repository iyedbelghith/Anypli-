import type { DashboardProject } from "../../DashboardPageInterface";

export interface RecentProjectsCardProps {
    title: string;
    viewAllLabel: string;
    projects: DashboardProject[];
}