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
import { affectationsTranslation } from "@constants/affectations/affectationsTranslation";

import { affectationsMockData } from "./AffectationsPageData";
import { affectationsPageStyles } from "./AffectationsPageStyle";

import type { AffectationStatus } from "./AffectationsPageInterface";

export default function AffectationsPage() {
    const { t } = useTranslation();

    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<string>("all");

    const filteredAffectations = useMemo(() => {
        return affectationsMockData.filter((affectation) => {
            const search = searchValue.trim().toLowerCase();

            const matchesSearch =
                affectation.employee.toLowerCase().includes(search) ||
                affectation.project.toLowerCase().includes(search) ||
                affectation.client.toLowerCase().includes(search) ||
                affectation.mission.toLowerCase().includes(search);

            const matchesStatus =
                selectedStatus === "all" || affectation.status === selectedStatus;

            return matchesSearch && matchesStatus;
        });
    }, [searchValue, selectedStatus]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedStatus(event.target.value);
    };

    const getStatusLabel = (status: AffectationStatus) => {
        return t(affectationsTranslation.status[status]);
    };

    const getStatusStyle = (status: AffectationStatus) => {
        if (status === "active") {
            return affectationsPageStyles.activeStatus;
        }

        if (status === "completed") {
            return affectationsPageStyles.completedStatus;
        }

        return affectationsPageStyles.cancelledStatus;
    };

    return (
        <DashboardLayout title={t(affectationsTranslation.header.title)}>
            <Box sx={affectationsPageStyles.header}>
                <Box>
                    <Typography variant="h4" sx={affectationsPageStyles.title}>
                        {t(affectationsTranslation.header.title)}
                    </Typography>

                    <Typography sx={affectationsPageStyles.subtitle}>
                        {t(affectationsTranslation.header.subtitle)}
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    sx={affectationsPageStyles.addButton}
                >
                    {t(affectationsTranslation.header.addButton)}
                </Button>
            </Box>

            <Paper sx={affectationsPageStyles.card}>
                <Box sx={affectationsPageStyles.filters}>
                    <TextField
                        placeholder={t(affectationsTranslation.filters.searchPlaceholder)}
                        value={searchValue}
                        onChange={handleSearchChange}
                        sx={affectationsPageStyles.searchField}
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
                        sx={affectationsPageStyles.statusFilter}
                    >
                        <MenuItem value="all">{t(affectationsTranslation.filters.allStatuses)}</MenuItem>
                        <MenuItem value="active">{t(affectationsTranslation.status.active)}</MenuItem>
                        <MenuItem value="completed">{t(affectationsTranslation.status.completed)}</MenuItem>
                        <MenuItem value="cancelled">{t(affectationsTranslation.status.cancelled)}</MenuItem>
                    </TextField>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead sx={affectationsPageStyles.tableHead}>
                            <TableRow>
                                <TableCell>{t(affectationsTranslation.table.employee)}</TableCell>
                                <TableCell>{t(affectationsTranslation.table.project)}</TableCell>
                                <TableCell>{t(affectationsTranslation.table.client)}</TableCell>
                                <TableCell>{t(affectationsTranslation.table.mission)}</TableCell>
                                <TableCell>{t(affectationsTranslation.table.status)}</TableCell>
                                <TableCell>{t(affectationsTranslation.table.startDate)}</TableCell>
                                <TableCell>{t(affectationsTranslation.table.endDate)}</TableCell>
                                <TableCell align="right">{t(affectationsTranslation.table.actions)}</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredAffectations.map((affectation) => (
                                <TableRow
                                    key={affectation.id}
                                    hover
                                    sx={affectationsPageStyles.tableRow}
                                >
                                    <TableCell>
                                        <Typography sx={affectationsPageStyles.employeeName}>
                                            {affectation.employee}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography sx={affectationsPageStyles.projectName}>
                                            {affectation.project}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            sx={affectationsPageStyles.clientName}
                                        >
                                            {affectation.client}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>{affectation.mission}</TableCell>

                                    <TableCell>
                                        <Box
                                            sx={{
                                                ...affectationsPageStyles.statusBadge,
                                                ...getStatusStyle(affectation.status),
                                            }}
                                        >
                                            {getStatusLabel(affectation.status)}
                                        </Box>
                                    </TableCell>

                                    <TableCell>{affectation.startDate}</TableCell>

                                    <TableCell>{affectation.endDate}</TableCell>

                                    <TableCell align="right">
                                        <Box sx={affectationsPageStyles.actions}>
                                            <IconButton
                                                size="small"
                                                sx={affectationsPageStyles.editButton}
                                            >
                                                <EditOutlinedIcon fontSize="small" />
                                            </IconButton>

                                            <IconButton
                                                size="small"
                                                sx={affectationsPageStyles.deleteButton}
                                            >
                                                <DeleteOutlineOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {filteredAffectations.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={8}>
                                        <Box sx={affectationsPageStyles.emptyState}>
                                            <Typography>{t(affectationsTranslation.emptyState.noAffectations)}</Typography>
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