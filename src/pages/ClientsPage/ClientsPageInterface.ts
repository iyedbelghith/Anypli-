export interface ClientTableItem {
    id: number;
    name: string;
    email: string;
    telephone: string;
    company: string;
    status: "active" | "inactive";
    createdAt: string;
}