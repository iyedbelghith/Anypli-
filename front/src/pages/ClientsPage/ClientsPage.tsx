import { useMemo, useState, type ChangeEvent } from "react";

import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";

import AddClientDialog, {
    type AddClientFormValues,
} from "./components/AddClientDialog";

import type { ClientTableItem } from "./ClientsPageInterface";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useTranslation } from "react-i18next";

import DashboardLayout from "@layouts/DashboardLayout";
import { clientsTranslation } from "@constants/clients/clientsTranslation";

import { clientsMockData } from "./ClientsPageData";
import { clientsPageStyles } from "./ClientsPageStyle";

export default function ClientsPage() {
    const { t } = useTranslation();

    const [clients, setClients] = useState<ClientTableItem[]>(clientsMockData);
    const [selectedClient, setSelectedClient] = useState<ClientTableItem | null>(null);
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<string>("all");
    const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);

    const handleDeleteClient = (clientId: number) => {
        setClients((currentClients) =>
            currentClients.filter((client) => client.id !== clientId),
        );
    };

    const filteredClients = useMemo(() => {
        return clients.filter((client) => {
            const search = searchValue.trim().toLowerCase();

            const matchesSearch =
                client.name.toLowerCase().includes(search) ||
                client.email.toLowerCase().includes(search) ||
                client.company.toLowerCase().includes(search);

            const matchesStatus =
                selectedStatus === "all" || client.status === selectedStatus;

            return matchesSearch && matchesStatus;
        });
    }, [clients, searchValue, selectedStatus]);

    const handleOpenAddDialog = () => {
        setIsAddDialogOpen(true);
    };

    const handleCloseAddDialog = () => {
        setIsAddDialogOpen(false);
    };

    const handleOpenEditDialog = (client: ClientTableItem) => {
        setSelectedClient(client);
        setIsEditDialogOpen(true);
    };

    const handleCloseEditDialog = () => {
        setSelectedClient(null);
        setIsEditDialogOpen(false);
    };

    const handleAddClient = (values: AddClientFormValues) => {
        const newClient: ClientTableItem = {
            id: Date.now(),
            name: values.name,
            email: values.email,
            telephone: values.telephone,
            company: values.company,
            status: values.status,
            createdAt: new Date().toISOString().split("T")[0],
        };

        setClients((currentClients) => [newClient, ...currentClients]);
    };

    const handleUpdateClient = (values: AddClientFormValues) => {
        if (!selectedClient) {
            return;
        }

        setClients((currentClients) =>
            currentClients.map((client) =>
                client.id === selectedClient.id
                    ? {
                          ...client,
                          ...values,
                      }
                    : client,
            ),
        );

        handleCloseEditDialog();
    };

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedStatus(event.target.value);
    };

    return (
        <DashboardLayout title={t(clientsTranslation.header.title)}>
            <Box sx={clientsPageStyles.header}>
                <Box>
                    <Typography variant="h4" sx={clientsPageStyles.title}>
                        {t(clientsTranslation.header.title)}
                    </Typography>

                    <Typography sx={clientsPageStyles.subtitle}>
                        {t(clientsTranslation.header.subtitle)}
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    sx={clientsPageStyles.addButton}
                    onClick={handleOpenAddDialog}
                >
                    {t(clientsTranslation.header.addButton)}
                </Button>
            </Box>

            <Paper sx={clientsPageStyles.card}>
                <Box sx={clientsPageStyles.filters}>
                    <TextField
                        placeholder={t(clientsTranslation.filters.searchPlaceholder)}
                        value={searchValue}
                        onChange={handleSearchChange}
                        sx={clientsPageStyles.searchField}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchOutlinedIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    <TextField
                        select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        sx={clientsPageStyles.statusFilter}
                    >
                        <MenuItem value="all">{t(clientsTranslation.filters.allStatuses)}</MenuItem>
                        <MenuItem value="active">{t(clientsTranslation.status.active)}</MenuItem>
                        <MenuItem value="inactive">{t(clientsTranslation.status.inactive)}</MenuItem>
                    </TextField>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead sx={clientsPageStyles.tableHead}>
                            <TableRow>
                                <TableCell>{t(clientsTranslation.table.client)}</TableCell>
                                <TableCell>{t(clientsTranslation.table.email)}</TableCell>
                                <TableCell>{t(clientsTranslation.table.phone)}</TableCell>
                                <TableCell>{t(clientsTranslation.table.company)}</TableCell>
                                <TableCell>{t(clientsTranslation.table.status)}</TableCell>
                                <TableCell>{t(clientsTranslation.table.createdAt)}</TableCell>
                                <TableCell align="right">{t(clientsTranslation.table.actions)}</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredClients.map((client) => (
                                <TableRow key={client.id} hover sx={clientsPageStyles.tableRow}>
                                    <TableCell>
                                        <Typography sx={clientsPageStyles.clientName}>
                                            {client.name}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography variant="body2" sx={clientsPageStyles.clientEmail}>
                                            {client.email}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>{client.telephone}</TableCell>

                                    <TableCell>{client.company}</TableCell>

                                    <TableCell>
                                        <Box
                                            sx={
                                                client.status === "active"
                                                    ? clientsPageStyles.activeStatus
                                                    : clientsPageStyles.inactiveStatus
                                            }
                                        >
                                            {client.status === "active"
                                                ? t(clientsTranslation.status.active)
                                                : t(clientsTranslation.status.inactive)}
                                        </Box>
                                    </TableCell>

                                    <TableCell>{client.createdAt}</TableCell>

                                    <TableCell align="right">
                                        <Box sx={clientsPageStyles.actions}>
                                            <IconButton
                                                size="small"
                                                sx={clientsPageStyles.editButton}
                                                onClick={() => handleOpenEditDialog(client)}
                                            >
                                                <EditOutlinedIcon fontSize="small" />
                                            </IconButton>

                                            <IconButton
                                                size="small"
                                                sx={clientsPageStyles.deleteButton}
                                                onClick={() => handleDeleteClient(client.id)}
                                            >
                                                <DeleteOutlineOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {filteredClients.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <Box sx={clientsPageStyles.emptyState}>
                                            <Typography>
                                                {t(clientsTranslation.emptyState.noClients)}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <AddClientDialog
                open={isAddDialogOpen}
                title={t(clientsTranslation.dialog.addTitle)}
                submitLabel={t(clientsTranslation.form.save)}
                onClose={handleCloseAddDialog}
                onSubmit={handleAddClient}
            />

            <AddClientDialog
                open={isEditDialogOpen}
                title={t(clientsTranslation.dialog.editTitle)}
                submitLabel={t(clientsTranslation.form.update)}
                initialValues={
                    selectedClient
                        ? {
                              name: selectedClient.name,
                              email: selectedClient.email,
                              telephone: selectedClient.telephone,
                              company: selectedClient.company,
                              status: selectedClient.status,
                          }
                        : undefined
                }
                onClose={handleCloseEditDialog}
                onSubmit={handleUpdateClient}
            />
        </DashboardLayout>
    );
}
