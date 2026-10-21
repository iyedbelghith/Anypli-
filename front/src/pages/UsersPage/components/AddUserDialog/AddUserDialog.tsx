import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

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

import { USER_ROLES } from "@constants/roles";
import { usersTranslation } from "@constants/users/usersTranslation";

import type {
    AddUserDialogProps,
    AddUserFormValues,
} from "./AddUserDialogInterface";
import { addUserDialogStyles } from "./AddUserDialogStyle";

const EMPTY_FORM: AddUserFormValues = {
    name: "",
    prenom: "",
    email: "",
    password: "",
    telephone: "",
    role: USER_ROLES.EMPLOYEE,
    status: "active",
};

export default function AddUserDialog({
    open,
    title,
    submitLabel,
    initialValues,
    onClose,
    onSubmit,
}: AddUserDialogProps) {
    const { t } = useTranslation();
    const [form, setForm] = useState<AddUserFormValues>(EMPTY_FORM);
    const isEditMode = Boolean(initialValues);

    useEffect(() => {
        if (!open) {
            return;
        }

        if (initialValues) {
            setForm({
                ...initialValues,
                password: "",
            });
            return;
        }

        setForm(EMPTY_FORM);
        // Sync form only when the dialog opens
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const isFormValid = Boolean(
        form.name.trim() &&
            form.prenom.trim() &&
            form.email.trim() &&
            (isEditMode || form.password.trim()),
    );

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const fieldName = event.target.name as keyof AddUserFormValues;

        setForm({
            ...form,
            [fieldName]: event.target.value,
        });
    };

    const handleClose = () => {
        setForm(EMPTY_FORM);
        onClose();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isFormValid) {
            return;
        }

        onSubmit(form);
        setForm(EMPTY_FORM);
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <Box component="form" onSubmit={handleSubmit}>
                <DialogTitle sx={addUserDialogStyles.title}>{title}</DialogTitle>

                <DialogContent sx={addUserDialogStyles.content}>
                    <Box sx={addUserDialogStyles.row}>
                        <TextField
                            name="prenom"
                            label={t(usersTranslation.dialog.fields.prenom)}
                            value={form.prenom}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                            required
                        />

                        <TextField
                            name="name"
                            label={t(usersTranslation.dialog.fields.name)}
                            value={form.name}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                            required
                        />
                    </Box>

                    <TextField
                        name="email"
                        type="email"
                        label={t(usersTranslation.dialog.fields.email)}
                        value={form.email}
                        onChange={handleChange}
                        sx={addUserDialogStyles.field}
                        required
                    />

                    {!isEditMode && (
                        <TextField
                            name="password"
                            type="password"
                            label={t(usersTranslation.form.password)}
                            value={form.password}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                            required={!initialValues}

                        />
                    )}

                    <TextField
                        name="telephone"
                        label={t(usersTranslation.dialog.fields.telephone)}
                        value={form.telephone}
                        onChange={handleChange}
                        sx={addUserDialogStyles.field}
                    />

                    <Box sx={addUserDialogStyles.row}>
                        <TextField
                            select
                            name="role"
                            label={t(usersTranslation.dialog.fields.role)}
                            value={form.role}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                        >
                            <MenuItem value={USER_ROLES.ADMIN}>
                                {t(usersTranslation.roles.admin)}
                            </MenuItem>
                            <MenuItem value={USER_ROLES.EMPLOYEE}>
                                {t(usersTranslation.roles.employe)}
                            </MenuItem>
                            <MenuItem value={USER_ROLES.CLIENT}>
                                {t(usersTranslation.roles.client)}
                            </MenuItem>
                        </TextField>

                        <TextField
                            select
                            name="status"
                            label={t(usersTranslation.dialog.fields.status)}
                            value={form.status}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                        >
                            <MenuItem value="active">
                                {t(usersTranslation.status.active)}
                            </MenuItem>
                            <MenuItem value="inactive">
                                {t(usersTranslation.status.inactive)}
                            </MenuItem>
                        </TextField>
                    </Box>
                </DialogContent>

                <DialogActions sx={addUserDialogStyles.actions}>
                    <Button onClick={handleClose} sx={addUserDialogStyles.cancelButton}>
                        {t(usersTranslation.dialog.actions.cancel)}
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!isFormValid}
                        sx={addUserDialogStyles.submitButton}
                    >
                        {submitLabel}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
