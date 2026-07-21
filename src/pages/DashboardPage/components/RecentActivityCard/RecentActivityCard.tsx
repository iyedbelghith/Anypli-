import { Box, Paper, Typography } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import type { RecentActivityCardProps } from "./RecentActivityCardInterface";
import { recentActivityCardStyles } from "./RecentActivityCardStyle";

export default function RecentActivityCard({
    title,
    activities,
}: RecentActivityCardProps) {
    return (
        <Paper sx={recentActivityCardStyles.card}>
            <Typography variant="h6" sx={recentActivityCardStyles.title}>
                {title}
            </Typography>

            <Box sx={recentActivityCardStyles.list}>
                {activities.map((activity) => (
                    <Box key={activity.title} sx={recentActivityCardStyles.row}>
                        <Box sx={recentActivityCardStyles.icon}>
                            <FolderOutlinedIcon fontSize="small" />
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={recentActivityCardStyles.activityTitle}>
                                {activity.title}
                            </Typography>

                            <Typography variant="caption" color="text.secondary">
                                {activity.author} · {activity.time}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}