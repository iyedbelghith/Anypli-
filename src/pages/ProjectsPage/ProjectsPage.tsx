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

import AddProjectDialog, {
    type AddProjectFormValues,
} from "./components/AddProjectDialog";



import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useTranslation } from "react-i18next";

import DashboardLayout from "@layouts/DashboardLayout";
import { projectsTranslation } from "@constants/projects/projectsTranslation";

import { projectsMockData } from "./ProjectsPageData";
import { projectsPageStyles } from "./ProjectsPageStyle";

import type {
    ProjectStatus,
    ProjectTableItem,
} from "./ProjectsPageInterface";

export default function ProjectsPage() {
    const { t } = useTranslation();

    const [projects, setProjects] =
        useState<ProjectTableItem[]>(projectsMockData);

    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<string>("all");
    const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const search = searchValue.trim().toLowerCase();

            const matchesSearch =
                project.title.toLowerCase().includes(search) ||
                project.client.toLowerCase().includes(search) ||
                project.manager.toLowerCase().includes(search);

            const matchesStatus =
                selectedStatus === "all" || project.status === selectedStatus;

            return matchesSearch && matchesStatus;
        });
    }, [projects, searchValue, selectedStatus]);
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedStatus(event.target.value);
    };

    const getStatusLabel = (status: ProjectStatus) => {
        return t(projectsTranslation.status[status]);
    };

    const handleOpenAddDialog = () => {
        setIsAddDialogOpen(true);
    };

    const handleCloseAddDialog = () => {
        setIsAddDialogOpen(false);
    };

    const handleAddProject = (values: AddProjectFormValues) => {
        const newProject: ProjectTableItem = {
            id: Date.now(),
            title: values.title,
            client: values.client,
            manager: values.manager,
            status: values.status,
            startDate: values.startDate,
            endDate: values.endDate,
        };

        setProjects((currentProjects) => [newProject, ...currentProjects]);
    };

    const getStatusStyle = (status: ProjectStatus) => {
        if (status === "study") {
            return projectsPageStyles.studyStatus;
        }

        if (status === "in_progress") {
            return projectsPageStyles.inProgressStatus;
        }

        if (status === "completed") {
            return projectsPageStyles.completedStatus;
        }

        return projectsPageStyles.cancelledStatus;
    };

    return (
        <DashboardLayout title={t(projectsTranslation.header.title)}>
            <Box sx={projectsPageStyles.header}>
                <Box>
                    <Typography variant="h4" sx={projectsPageStyles.title}>
                        {t(projectsTranslation.header.title)}
                    </Typography>

                    <Typography sx={projectsPageStyles.subtitle}>
                        {t(projectsTranslation.header.subtitle)}
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<AddOutlinedIcon />}
                    sx={projectsPageStyles.addButton}
                    onClick={handleOpenAddDialog}
                >
                    {t(projectsTranslation.header.addButton)}
                </Button>
            </Box>

            <Paper sx={projectsPageStyles.card}>
                <Box sx={projectsPageStyles.filters}>
                    <TextField
                        placeholder={t(projectsTranslation.filters.searchPlaceholder)}
                        value={searchValue}
                        onChange={handleSearchChange}
                        sx={projectsPageStyles.searchField}
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
                        sx={projectsPageStyles.statusFilter}
                    >
                        <MenuItem value="all">{t(projectsTranslation.filters.allStatuses)}</MenuItem>
                        <MenuItem value="study">{t(projectsTranslation.status.study)}</MenuItem>
                        <MenuItem value="in_progress">{t(projectsTranslation.status.in_progress)}</MenuItem>
                        <MenuItem value="completed">{t(projectsTranslation.status.completed)}</MenuItem>
                        <MenuItem value="cancelled">{t(projectsTranslation.status.cancelled)}</MenuItem>
                    </TextField>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead sx={projectsPageStyles.tableHead}>
                            <TableRow>
                                <TableCell>{t(projectsTranslation.table.project)}</TableCell>
                                <TableCell>{t(projectsTranslation.table.client)}</TableCell>
                                <TableCell>{t(projectsTranslation.table.manager)}</TableCell>
                                <TableCell>{t(projectsTranslation.table.status)}</TableCell>
                                <TableCell>{t(projectsTranslation.table.startDate)}</TableCell>
                                <TableCell>{t(projectsTranslation.table.endDate)}</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {filteredProjects.map((project) => (
                                <TableRow
                                    key={project.id}
                                    hover
                                    sx={projectsPageStyles.tableRow}
                                >
                                    <TableCell>
                                        <Typography sx={projectsPageStyles.projectTitle}>
                                            {project.title}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            sx={projectsPageStyles.projectClient}
                                        >
                                            {project.client}
                                        </Typography>
                                    </TableCell>

                                    <TableCell>{project.manager}</TableCell>

                                    <TableCell>
                                        <Box
                                            sx={{
                                                ...projectsPageStyles.statusBadge,
                                                ...getStatusStyle(project.status),
                                            }}
                                        >
                                            {getStatusLabel(project.status)}
                                        </Box>
                                    </TableCell>

                                    <TableCell>{project.startDate}</TableCell>

                                    <TableCell>{project.endDate}</TableCell>

                                    <TableCell align="right">
                                        <Box sx={projectsPageStyles.actions}>
                                            <IconButton
                                                size="small"
                                                sx={projectsPageStyles.editButton}
                                            >
                                                <EditOutlinedIcon fontSize="small" />
                                            </IconButton>

                                            <IconButton
                                                size="small"
                                                sx={projectsPageStyles.deleteButton}
                                            >
                                                <DeleteOutlineOutlinedIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {filteredProjects.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={7}>
                                        <Box sx={projectsPageStyles.emptyState}>
                                            <Typography>{t(projectsTranslation.emptyState.noProjects)}</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <AddProjectDialog
                open={isAddDialogOpen}
                onClose={handleCloseAddDialog}
                onSubmit={handleAddProject}
            />
        </DashboardLayout>
    );
}