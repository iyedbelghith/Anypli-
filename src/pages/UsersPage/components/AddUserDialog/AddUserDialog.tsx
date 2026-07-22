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

import type { AddUserDialogProps, NewUserInput } from "./AddUserDialogInterface";
import { addUserDialogStyles } from "./AddUserDialogStyle";

const EMPTY_FORM: NewUserInput = {
    name: "",
    prenom: "",
    email: "",
    telephone: "",
    role: "employe",
    status: "active",
};

export default function AddUserDialog({
    open,
    labels,
    onClose,
    onSubmit,
}: AddUserDialogProps) {
    const [form, setForm] = useState<NewUserInput>(EMPTY_FORM);

    const isFormValid = Boolean(
        form.name.trim() && form.prenom.trim() && form.email.trim(),
    );

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const fieldName = event.target.name as keyof NewUserInput;

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
                <DialogTitle sx={addUserDialogStyles.title}>
                    {labels.title}
                </DialogTitle>

                <DialogContent sx={addUserDialogStyles.content}>
                    <Box sx={addUserDialogStyles.row}>
                        <TextField
                            name="prenom"
                            label={labels.fields.prenom}
                            value={form.prenom}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                            required
                        />

                        <TextField
                            name="name"
                            label={labels.fields.name}
                            value={form.name}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                            required
                        />
                    </Box>

                    <TextField
                        name="email"
                        type="email"
                        label={labels.fields.email}
                        value={form.email}
                        onChange={handleChange}
                        sx={addUserDialogStyles.field}
                        required
                    />

                    <TextField
                        name="telephone"
                        label={labels.fields.telephone}
                        value={form.telephone}
                        onChange={handleChange}
                        sx={addUserDialogStyles.field}
                    />

                    <Box sx={addUserDialogStyles.row}>
                        <TextField
                            select
                            name="role"
                            label={labels.fields.role}
                            value={form.role}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                        >
                            <MenuItem value="admin">{labels.roles.admin}</MenuItem>
                            <MenuItem value="employe">{labels.roles.employe}</MenuItem>
                            <MenuItem value="client">{labels.roles.client}</MenuItem>
                        </TextField>

                        <TextField
                            select
                            name="status"
                            label={labels.fields.status}
                            value={form.status}
                            onChange={handleChange}
                            sx={addUserDialogStyles.field}
                        >
                            <MenuItem value="active">{labels.status.active}</MenuItem>
                            <MenuItem value="inactive">{labels.status.inactive}</MenuItem>
                        </TextField>
                    </Box>
                </DialogContent>

                <DialogActions sx={addUserDialogStyles.actions}>
                    <Button onClick={handleClose} sx={addUserDialogStyles.cancelButton}>
                        {labels.actions.cancel}
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!isFormValid}
                        sx={addUserDialogStyles.submitButton}
                    >
                        {labels.actions.submit}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
