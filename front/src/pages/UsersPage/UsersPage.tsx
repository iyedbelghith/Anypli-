import { useMemo, useState, type ChangeEvent } from "react";

import {
    Box,
    Button,
    CircularProgress,
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
import { USER_ROLES } from "@constants/roles";
import { usersTranslation } from "@constants/users/usersTranslation";

import {
    useCreateUserMutation,
    useDeleteUserMutation,
    useGetUsersQuery,
    useUpdateUserMutation,
} from "@features/users/api/userApi";

import { transformUsersToTableItems } from "@features/users/api/transformer";

import type {
    CreateUserPayload,
    UpdateUserPayload,
    UserTableItem,
} from "@features/users/api/usersApiInterface";

import { usersPageStyles } from "./UsersPageStyle";

import AddUserDialog from "./components/AddUserDialog";
import type { AddUserFormValues } from "./components/AddUserDialog/AddUserDialogInterface";

export default function UsersPage() {
    const { t } = useTranslation();

    const [selectedUser, setSelectedUser] = useState<UserTableItem | null>(null);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedRole, setSelectedRole] = useState<string>("all");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { data, isLoading, isError, refetch } = useGetUsersQuery(currentPage);

    const [createUser] = useCreateUserMutation();
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    const users = useMemo(() => {
        return transformUsersToTableItems(data?.data?.data ?? []);
    }, [data]);

    const pagination = data?.data;

    const canGoPrevious = Boolean(pagination?.prev_page_url);
    const canGoNext = Boolean(pagination?.next_page_url);

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

    const refreshUsersList = async () => {
        if (currentPage === 1) {
            await refetch();
            return;
        }

        setCurrentPage(1);
    };

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

    const handleOpenEditDialog = (user: UserTableItem) => {
        setSelectedUser(user);
        setIsEditDialogOpen(true);
    };

    const handleCloseEditDialog = () => {
        setSelectedUser(null);
        setIsEditDialogOpen(false);
    };

    const handleAddUser = async (values: AddUserFormValues) => {
        const payload: CreateUserPayload = {
            name: values.name,
            prenom: values.prenom,
            email: values.email,
            password: values.password,
            telephone: values.telephone,
            role: values.role,
        };

        await createUser(payload).unwrap();
        handleCloseAddDialog();
        await refreshUsersList();
    };

    const handleUpdateUser = async (values: AddUserFormValues) => {
        if (!selectedUser) {
            return;
        }

        const payload: UpdateUserPayload = {
            id: selectedUser.id,
            name: values.name,
            prenom: values.prenom,
            email: values.email,
            telephone: values.telephone,
            role: values.role,
        };

        await updateUser(payload).unwrap();
        handleCloseEditDialog();
        await refetch();
    };

    const handleDeleteUser = async (userId: number) => {
        await deleteUser(userId).unwrap();
        await refetch();
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
                </Box>

                {isLoading && (
                    <Box sx={usersPageStyles.emptyState}>
                        <CircularProgress size={28} />
                    </Box>
                )}

                {isError && (
                    <Box sx={usersPageStyles.emptyState}>
                        <Typography color="error">
                            Impossible de charger les utilisateurs.
                        </Typography>
                    </Box>
                )}

                {!isLoading && !isError && (
                    <>
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
                                                    <IconButton
                                                        size="small"
                                                        sx={usersPageStyles.editButton}
                                                        onClick={() => handleOpenEditDialog(user)}
                                                    >
                                                        <EditOutlinedIcon fontSize="small" />
                                                    </IconButton>

                                                    <IconButton
                                                        size="small"
                                                        sx={usersPageStyles.deleteButton}
                                                        onClick={() => handleDeleteUser(user.id)}
                                                    >
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
                                                    <Typography>
                                                        {t(usersTranslation.emptyState.noUsers)}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Box sx={usersPageStyles.pagination}>
                            <Button
                                variant="outlined"
                                disabled={!canGoPrevious}
                                onClick={() => setCurrentPage((page) => page - 1)}
                            >
                                Précédent
                            </Button>

                            <Typography>
                                Page {pagination?.current_page ?? 1} /{" "}
                                {pagination?.last_page ?? 1}
                            </Typography>

                            <Button
                                variant="outlined"
                                disabled={!canGoNext}
                                onClick={() => setCurrentPage((page) => page + 1)}
                            >
                                Suivant
                            </Button>
                        </Box>
                    </>
                )}
            </Paper>

            <AddUserDialog
                open={isAddDialogOpen}
                title={t(usersTranslation.dialog.addTitle)}
                submitLabel={t(usersTranslation.form.save)}
                onClose={handleCloseAddDialog}
                onSubmit={handleAddUser}
            />

            <AddUserDialog
                open={isEditDialogOpen}
                title={t(usersTranslation.dialog.editTitle)}
                submitLabel={t(usersTranslation.form.update)}
                initialValues={
                    selectedUser
                        ? {
                            name: selectedUser.name,
                            prenom: selectedUser.prenom,
                            email: selectedUser.email,
                        
                            telephone: selectedUser.telephone,
                            role: selectedUser.role,
                            status: selectedUser.status,
                        }
                        : undefined
                }
                onClose={handleCloseEditDialog}
                onSubmit={handleUpdateUser}
            />
        </DashboardLayout>
    );
}