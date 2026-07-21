import type { UserTableItem } from "./UsersPageInterface";

export const usersMockData: UserTableItem[] = [
    {
        id: 1,
        name: "Admin",
        prenom: "User",
        email: "admin@anypli.com",
        telephone: "+216 20 000 000",
        role: "admin",
        status: "active",
        createdAt: "2025-01-10",
    },
    {
        id: 2,
        name: "Ben Ali",
        prenom: "Karim",
        email: "karim.benali@anypli.com",
        telephone: "+216 21 345 678",
        role: "employe",
        status: "active",
        createdAt: "2025-02-15",
    },
    {
        id: 3,
        name: "Sow",
        prenom: "Fatou",
        email: "fatou.sow@client.com",
        telephone: "+216 55 222 111",
        role: "client",
        status: "inactive",
        createdAt: "2025-03-02",
    },
];