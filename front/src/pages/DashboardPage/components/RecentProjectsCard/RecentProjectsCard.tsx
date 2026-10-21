import { Box, Paper, Typography } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import type { RecentProjectsCardProps } from "./RecentProjectsCardInterface";
import { recentProjectsCardStyles } from "./RecentProjectsCardStyle";

export default function RecentProjectsCard({
    title,
    viewAllLabel,
    projects,
}: RecentProjectsCardProps) {
    return (
        <Paper sx={recentProjectsCardStyles.card}>
            <Box sx={recentProjectsCardStyles.header}>
                <Typography variant="h6" sx={recentProjectsCardStyles.title}>
                    {title}
                </Typography>

                <Typography variant="body2" sx={recentProjectsCardStyles.viewAll}>
                    {viewAllLabel}
                </Typography>
            </Box>

            <Box sx={recentProjectsCardStyles.list}>
                {projects.map((project) => (
                    <Box key={project.title} sx={recentProjectsCardStyles.row}>
                        <Box sx={recentProjectsCardStyles.icon}>
                            <FolderOutlinedIcon fontSize="small" />
                        </Box>

                        <Box sx={recentProjectsCardStyles.info}>
                            <Typography sx={recentProjectsCardStyles.projectTitle}>
                                {project.title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {project.client}
                            </Typography>
                        </Box>

                        <Box sx={recentProjectsCardStyles.status}>
                            {project.status}
                        </Box>

                        <Typography variant="body2" color="text.secondary">
                            {project.date}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}