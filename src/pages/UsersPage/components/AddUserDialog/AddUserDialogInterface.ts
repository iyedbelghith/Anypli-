import type { UserTableItem } from "../../UsersPageInterface";

export type NewUserInput = Omit<UserTableItem, "id" | "createdAt">;

export interface AddUserDialogLabels {
    title: string;
    fields: {
        name: string;
        prenom: string;
        email: string;
        telephone: string;
        role: string;
        status: string;
    };
    roles: {
        admin: string;
        employe: string;
        client: string;
    };
    status: {
        active: string;
        inactive: string;
    };
    actions: {
        cancel: string;
        submit: string;
    };
}

export interface AddUserDialogProps {
    open: boolean;
    labels: AddUserDialogLabels;
    onClose: () => void;
    onSubmit: (user: NewUserInput) => void;
}
