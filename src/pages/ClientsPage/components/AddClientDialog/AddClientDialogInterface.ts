import type { ClientTableItem } from "../../ClientsPageInterface";

export interface AddClientFormValues {
    name: string;
    email: string;
    telephone: string;
    company: string;
    status: ClientTableItem["status"];
}

export type AddClientFormField = keyof AddClientFormValues;

export interface AddClientDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (values: AddClientFormValues) => void;
}