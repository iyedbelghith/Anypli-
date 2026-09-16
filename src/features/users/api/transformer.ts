import type {
    UserApiResponse,
    UserTableItem,
} from "./usersApiInterface";

export const transformUserToTableItem = (
    user: UserApiResponse
): UserTableItem => {
    return {
        id: user.id,
        name: user.name,
        prenom: user.prenom ?? "",
        email: user.email,
        telephone: user.telephone ?? "-",
        role: user.role,
        status: user.deleted_at ? "inactive" : "active",
        createdAt: user.created_at ? user.created_at.split("T")[0] : "-",
    };
};

export const transformUsersToTableItems = (
    users: UserApiResponse[]
): UserTableItem[] => {
    return users.map(transformUserToTableItem);
};