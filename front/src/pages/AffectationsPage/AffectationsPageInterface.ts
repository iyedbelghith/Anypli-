export type AffectationStatus = "active" | "completed" | "cancelled";

export interface AffectationTableItem {
    id: number;
    employee: string;
    project: string;
    client: string;
    mission: string;
    status: AffectationStatus;
    startDate: string;
    endDate: string;
}