import type { ProjectTableItem } from "../../ProjectsPageInterface";

export interface AddProjectFormValues {
    title: string;
    client: string;
    manager: string;
    status: ProjectTableItem["status"];
    startDate: string;
    endDate: string;
}

export type AddProjectFormField = keyof AddProjectFormValues;

export interface AddProjectDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (values: AddProjectFormValues) => void;
}