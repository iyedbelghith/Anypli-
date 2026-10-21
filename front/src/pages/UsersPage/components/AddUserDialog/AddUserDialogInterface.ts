import type { UserRole } from "@features/auth/types/authTypes";
import type { UserStatus } from "@features/users/api/usersApiInterface";

export interface AddUserFormValues {
    name: string;
    prenom: string;
    email: string;
    password: string;
    telephone: string;
    role: UserRole;
    status: UserStatus;
}

export interface AddUserDialogProps {
    open: boolean;
    title: string;
    submitLabel: string;
    initialValues?: Omit<AddUserFormValues, "password">;
    onClose: () => void;
    onSubmit: (values: AddUserFormValues) => void;
}
