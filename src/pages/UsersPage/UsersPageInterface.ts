export interface UserTableItem {
    id: number;
    name: string;
    prenom: string;
    email: string;
    telephone: string;
    role: "admin" | "employe" | "client";
    status: "active" | "inactive";
    createdAt: string;
}
