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

    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<string>("all");

    const filteredClients = useMemo(() => {
        return clientsMockData.filter((client) => {
            const search = searchValue.trim().toLowerCase();

            const matchesSearch =
                client.name.toLowerCase().includes(search) ||
                client.email.toLowerCase().includes(search) ||
                client.company.toLowerCase().includes(search);

            const matchesStatus =
                selectedStatus === "all" || client.status === selectedStatus;

            return matchesSearch && matchesStatus;
        });
    }, [searchValue, selectedStatus]);

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
                                            <IconButton size="small" sx={clientsPageStyles.editButton}>
                                                <EditOutlinedIcon fontSize="small" />
                                            </IconButton>

                                            <IconButton size="small" sx={clientsPageStyles.deleteButton}>
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
                                            <Typography>{t(clientsTranslation.emptyState.noClients)}</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </DashboardLayout>
    );
}