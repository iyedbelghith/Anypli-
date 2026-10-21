import type { ClientTableItem } from "./ClientsPageInterface";

// Temporary mock data used only for Clients page UI design.
// These values will be replaced later by data from the Laravel API.
export const clientsMockData: ClientTableItem[] = [
    {
        id: 1,
        name: "Nexcore Solutions",
        email: "contact@nexcore.com",
        telephone: "+216 20 111 222",
        company: "Nexcore Solutions",
        status: "active",
        createdAt: "2025-01-20",
    },
    {
        id: 2,
        name: "TechVision SARL",
        email: "contact@techvision.com",
        telephone: "+216 21 333 444",
        company: "TechVision SARL",
        status: "active",
        createdAt: "2025-02-10",
    },
    {
        id: 3,
        name: "Innova Finance",
        email: "contact@innova-finance.com",
        telephone: "+216 55 777 888",
        company: "Innova Finance",
        status: "inactive",
        createdAt: "2025-03-05",
    },
];