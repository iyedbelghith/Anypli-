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
import { usersTranslation } from "@constants/users/usersTranslation";

import { usersMockData } from "./UsersPageData";
import { usersPageStyles } from "./UsersPageStyle";

import AddUserDialog from "./components/AddUserDialog";
import type { NewUserInput } from "./components/AddUserDialog/AddUserDialogInterface";

import type { UserTableItem } from "./UsersPageInterface";

export default function UsersPage() {
    const { t } = useTranslation();

    const [users, setUsers] = useState<UserTableItem[]>(usersMockData);
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedRole, setSelectedRole] = useState<string>("all");
    const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const fullName = `${user.prenom} ${user.name}`.toLowerCase();
            const email = user.email.toLowerCase();
            const search = searchValue.trim().toLowerCase();

            const matchesSearch =
                fullName.includes(search) || email.includes(search);

            const matchesRole =
                selectedRole === "all" || user.role === selectedRole;

            return matchesSearch && matchesRole;
        });
    }, [users, searchValue, selectedRole]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedRole(event.target.value);
    };

    const handleOpenAddDialog = () => {
        setIsAddDialogOpen(true);
    };

    const handleCloseAddDialog = () => {
        setIsAddDialogOpen(false);
    };

    const handleAddUser = (newUser: NewUserInput) => {
        const nextId = Math.max(0, ...users.map((user) => user.id)) + 1;
        const createdAt = new Date().toISOString().slice(0, 10);

        setUsers([...users, { id: nextId, createdAt, ...newUser }]);
    };

    const getRoleLabel = (role: UserTableItem["role"]) => {
        return t(usersTranslation.roles[role]);
    };

    const getStatusLabel = (status: UserTableItem["status"]) => {
        return t(usersTranslation.status[status]);
    };

    return (
        <DashboardLayout title={t(usersTranslation.header.title)}>
            <Box sx={usersPageStyles.header}>
                <Box>
                    <Typography variant="h4" sx={usersPageStyles.title}>
                        {t(usersTranslation.header.title)}
                    </Typography>

                    <Typography sx={usersPageStyles.subtitle}>
                        {t(usersTranslation.header.subtitle)}
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    sx={usersPageStyles.addButton}
                    onClick={handleOpenAddDialog}
                >
                    {t(usersTranslation.header.addButton)}
                </Button>
            </Box>

            <AddUserDialog
                open={isAddDialogOpen}
                onClose={handleCloseAddDialog}
                onSubmit={handleAddUser}
                labels={{
                    title: t(usersTranslation.dialog.title),
                    fields: {
                        name: t(usersTranslation.dialog.fields.name),
                        prenom: t(usersTranslation.dialog.fields.prenom),
                        email: t(usersTranslation.dialog.fields.email),
                        telephone: t(usersTranslation.dialog.fields.telephone),
                        role: t(usersTranslation.dialog.fields.role),
                        status: t(usersTranslation.dialog.fields.status),
                    },
                    roles: {
                        admin: t(usersTranslation.roles.admin),
                        employe: t(usersTranslation.roles.employe),
                        client: t(usersTranslation.roles.client),
                    },
                    status: {
                        active: t(usersTranslation.status.active),
                        inactive: t(usersTranslation.status.inactive),
                    },
                    actions: {
                        cancel: t(usersTranslation.dialog.actions.cancel),
                        submit: t(usersTranslation.dialog.actions.submit),
                    },
                }}
            />

            <Paper sx={usersPageStyles.card}>
                <Box sx={usersPageStyles.filters}>
                    <TextField
                        placeholder={t(usersTranslation.filters.searchPlaceholder)}
                        value={searchValue}
                        onChange={handleSearchChange}
                        sx={usersPageStyles.searchField}
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
                        value={selectedRole}
                        onChange={handleRoleChange}
                        sx={usersPageStyles.roleFilter}
                    >
                        <MenuItem value="all">
                            {t(usersTranslation.filters.allRoles)}
                        </MenuItem>

                        <MenuItem value="admin">
                            {t(usersTranslation.roles.admin)}
                        </MenuItem>

                        <MenuItem value="employe">
                            {t(usersTranslation.roles.employe)}
                        </MenuItem>

                        <MenuItem value="client">
                            {t(usersTranslation.roles.client)}
                        </MenuItem>
                    </TextField>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead sx={usersPageStyles.tableHead}>
                            <TableRow>
                                <TableCell>{t(usersTranslation.table.user)}</TableCell>
                                <TableCell>{t(usersTranslation.table.email)}</TableCell>
                                <TableCell>{t(usersTranslation.table.phone)}</TableCell>
                                <TableCell>{t(usersTranslation.table.role)}</TableCell>
                                <TableCell>{t(usersTranslation.table.status)}</TableCell>
                                <TableCell>{t(usersTranslation.table.createdAt)}</TableCell>
                                <TableCell align="right">
                                    {t(usersTranslation.table.actions)}
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredUsers.map((user) => (
                                <TableRow key={user.id} hover sx={usersPageStyles.tableRow}>
                                    <TableCell>
                                        <Typography sx={usersPageStyles.userName}>
                                            {user.prenom} {user.name}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography variant="body2" sx={usersPageStyles.userEmail}>
                                            {user.email}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>{user.telephone}</TableCell>

                                    <TableCell>
                                        <Box sx={usersPageStyles.roleBadge}>
                                            {getRoleLabel(user.role)}
                                        </Box>
                                    </TableCell>

                                    <TableCell>
                                        <Box
                                            sx={
                                                user.status === "active"
                                                    ? usersPageStyles.activeStatus
                                                    : usersPageStyles.inactiveStatus
                                            }
                                        >
                                            {getStatusLabel(user.status)}
                                        </Box>
                                    </TableCell>

                                    <TableCell>{user.createdAt}</TableCell>

                                    <TableCell align="right">
                                        <Box sx={usersPageStyles.actions}>
                                            <IconButton size="small" sx={usersPageStyles.editButton}>
                                                <EditOutlinedIcon fontSize="small" />
                                            </IconButton>

                                            <IconButton size="small" sx={usersPageStyles.deleteButton}>
                                                <DeleteOutlineOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {filteredUsers.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <Box sx={usersPageStyles.emptyState}>
                                            <Typography>Aucun utilisateur trouvé.</Typography>
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