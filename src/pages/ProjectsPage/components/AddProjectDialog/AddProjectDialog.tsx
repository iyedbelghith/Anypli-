import { useState, type ChangeEvent, type FormEvent } from "react";

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    TextField,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import { projectsTranslation } from "@constants/projects/projectsTranslation";

import type {
    AddProjectDialogProps,
    AddProjectFormField,
    AddProjectFormValues,
} from "./AddProjectDialogInterface";

import { addProjectDialogStyles } from "./AddProjectDialogStyle";

const initialFormValues: AddProjectFormValues = {
    title: "",
    client: "",
    manager: "",
    status: "study",
    startDate: "",
    endDate: "",
};

export default function AddProjectDialog({
    open,
    onClose,
    onSubmit,
}: AddProjectDialogProps) {
    const { t } = useTranslation();

    const [formValues, setFormValues] =
        useState<AddProjectFormValues>(initialFormValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as AddProjectFormField;

        setFormValues({
            ...formValues,
            [fieldName]: event.target.value,
        });
    };

    const resetForm = () => {
        setFormValues(initialFormValues);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onSubmit({
            title: formValues.title.trim(),
            client: formValues.client.trim(),
            manager: formValues.manager.trim(),
            status: formValues.status,
            startDate: formValues.startDate,
            endDate: formValues.endDate,
        });

        resetForm();
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={addProjectDialogStyles.form}
            >
                <DialogTitle>{t(projectsTranslation.dialog.addTitle)}</DialogTitle>

                <DialogContent sx={addProjectDialogStyles.content}>
                    <TextField
                        name="title"
                        label={t(projectsTranslation.form.title)}
                        value={formValues.title}
                        onChange={handleChange}
                        required
                        fullWidth
                        sx={addProjectDialogStyles.field}
                    />

                    <Box sx={addProjectDialogStyles.row}>
                        <TextField
                            name="client"
                            label={t(projectsTranslation.form.client)}
                            value={formValues.client}
                            onChange={handleChange}
                            required
                            sx={addProjectDialogStyles.field}
                        />

                        <TextField
                            name="manager"
                            label={t(projectsTranslation.form.manager)}
                            value={formValues.manager}
                            onChange={handleChange}
                            required
                            sx={addProjectDialogStyles.field}
                        />
                    </Box>

                    <TextField
                        select
                        name="status"
                        label={t(projectsTranslation.form.status)}
                        value={formValues.status}
                        onChange={handleChange}
                        fullWidth
                        sx={addProjectDialogStyles.field}
                    >
                        <MenuItem value="study">
                            {t(projectsTranslation.status.study)}
                        </MenuItem>

                        <MenuItem value="in_progress">
                            {t(projectsTranslation.status.in_progress)}
                        </MenuItem>

                        <MenuItem value="completed">
                            {t(projectsTranslation.status.completed)}
                        </MenuItem>

                        <MenuItem value="cancelled">
                            {t(projectsTranslation.status.cancelled)}
                        </MenuItem>
                    </TextField>

                    <Box sx={addProjectDialogStyles.row}>
                        <TextField
                            name="startDate"
                            type="date"
                            label={t(projectsTranslation.form.startDate)}
                            value={formValues.startDate}
                            onChange={handleChange}
                            required
                            sx={addProjectDialogStyles.field}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />

                        <TextField
                            name="endDate"
                            type="date"
                            label={t(projectsTranslation.form.endDate)}
                            value={formValues.endDate}
                            onChange={handleChange}
                            required
                            sx={addProjectDialogStyles.field}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    </Box>
                </DialogContent>

                <DialogActions sx={addProjectDialogStyles.actions}>
                    <Button onClick={handleClose} sx={addProjectDialogStyles.cancelButton}>
                        {t(projectsTranslation.form.cancel)}
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={addProjectDialogStyles.submitButton}
                    >
                        {t(projectsTranslation.form.save)}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}