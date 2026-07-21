export interface DashboardProject {
    title: string;
    client: string;
    status: string;
    date: string;
}

export interface DashboardActivity {
    title: string;
    author: string;
    time: string;
}

export interface DashboardChartItem {
    month: string;
    projects: number;
    clients: number;
}

export interface DashboardStatusItem {
    label: string;
    value: number;
    color: "blue" | "orange" | "green";
}