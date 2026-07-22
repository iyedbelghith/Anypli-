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

import { clientsTranslation } from "@constants/clients/clientsTranslation";

import type {
    AddClientDialogProps,
    AddClientFormField,
    AddClientFormValues,
} from "./AddClientDialogInterface";

import { addClientDialogStyles } from "./AddClientDialogStyle";

const initialFormValues: AddClientFormValues = {
    name: "",
    email: "",
    telephone: "",
    company: "",
    status: "active",
};

export default function AddClientDialog({
    open,
    onClose,
    onSubmit,
}: AddClientDialogProps) {
    const { t } = useTranslation();

    const [formValues, setFormValues] =
        useState<AddClientFormValues>(initialFormValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as AddClientFormField;

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
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            telephone: formValues.telephone.trim(),
            company: formValues.company.trim(),
            status: formValues.status,
        });

        resetForm();
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={addClientDialogStyles.form}
            >
                <DialogTitle>{t(clientsTranslation.dialog.addTitle)}</DialogTitle>

                <DialogContent sx={addClientDialogStyles.content}>
                    <TextField
                        name="name"
                        label={t(clientsTranslation.form.name)}
                        value={formValues.name}
                        onChange={handleChange}
                        required
                        fullWidth
                        sx={addClientDialogStyles.field}
                    />

                    <TextField
                        name="company"
                        label={t(clientsTranslation.form.company)}
                        value={formValues.company}
                        onChange={handleChange}
                        required
                        fullWidth
                        sx={addClientDialogStyles.field}
                    />

                    <Box sx={addClientDialogStyles.row}>
                        <TextField
                            name="email"
                            type="email"
                            label={t(clientsTranslation.form.email)}
                            value={formValues.email}
                            onChange={handleChange}
                            required
                            sx={addClientDialogStyles.field}
                        />

                        <TextField
                            name="telephone"
                            label={t(clientsTranslation.form.phone)}
                            value={formValues.telephone}
                            onChange={handleChange}
                            sx={addClientDialogStyles.field}
                        />
                    </Box>

                    <TextField
                        select
                        name="status"
                        label={t(clientsTranslation.form.status)}
                        value={formValues.status}
                        onChange={handleChange}
                        fullWidth
                        sx={addClientDialogStyles.field}
                    >
                        <MenuItem value="active">
                            {t(clientsTranslation.status.active)}
                        </MenuItem>

                        <MenuItem value="inactive">
                            {t(clientsTranslation.status.inactive)}
                        </MenuItem>
                    </TextField>
                </DialogContent>

                <DialogActions sx={addClientDialogStyles.actions}>
                    <Button onClick={handleClose} sx={addClientDialogStyles.cancelButton}>
                        {t(clientsTranslation.form.cancel)}
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={addClientDialogStyles.submitButton}
                    >
                        {t(clientsTranslation.form.save)}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}