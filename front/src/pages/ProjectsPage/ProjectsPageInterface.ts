export type ProjectStatus = "study" | "in_progress" | "completed" | "cancelled";

export interface ProjectTableItem {
    id: number;
    title: string;
    client: string;
    manager: string;
    status: ProjectStatus;
    startDate: string;
    endDate: string;
}