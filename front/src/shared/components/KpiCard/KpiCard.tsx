import { Box, Paper, Typography } from "@mui/material";

import type { KpiCardProps } from "./KpiCardInterface";
import { kpiCardStyles } from "./KpiCardStyle";

export default function KpiCard({
    title,
    value,
    trend,
    trendType = "positive",
    icon,
}: KpiCardProps) {
    return (
        <Paper sx={kpiCardStyles.card}>
            {icon && <Box sx={kpiCardStyles.iconWrapper}>{icon}</Box>}

            <Box sx={kpiCardStyles.content}>
                <Typography sx={kpiCardStyles.title}>{title}</Typography>

                <Typography variant="h4" sx={kpiCardStyles.value}>
                    {value}
                </Typography>

                {trend && (
                    <Typography
                        variant="body2"
                        sx={
                            trendType === "positive"
                                ? kpiCardStyles.positiveTrend
                                : kpiCardStyles.negativeTrend
                        }
                    >
                        {trend}
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}