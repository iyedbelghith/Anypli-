import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

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

const EMPTY_FORM: AddClientFormValues = {
    name: "",
    email: "",
    telephone: "",
    company: "",
    status: "active",
};

export default function AddClientDialog({
    open,
    title,
    submitLabel,
    initialValues,
    onClose,
    onSubmit,
}: AddClientDialogProps) {
    const { t } = useTranslation();

    const [formValues, setFormValues] = useState<AddClientFormValues>(EMPTY_FORM);

    useEffect(() => {
        if (!open) {
            return;
        }

        setFormValues(initialValues ?? EMPTY_FORM);
        // Sync form only when the dialog opens
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as AddClientFormField;

        setFormValues({
            ...formValues,
            [fieldName]: event.target.value,
        });
    };

    const handleClose = () => {
        setFormValues(EMPTY_FORM);
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

        setFormValues(EMPTY_FORM);
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={addClientDialogStyles.form}
            >
                <DialogTitle>{title}</DialogTitle>

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
                        {submitLabel}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
