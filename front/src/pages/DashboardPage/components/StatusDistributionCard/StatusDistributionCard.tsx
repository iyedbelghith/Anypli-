import { Box, Paper, Typography } from "@mui/material";

import type { StatusColor } from "@shared/types/statusColor.types";

import type { StatusDistributionCardProps } from "./StatusDistributionCardInterface";
import { statusDistributionCardStyles } from "./StatusDistributionCardStyle";

const getDotStyle = (color: StatusColor) => {
    if (color === "blue") {
        return statusDistributionCardStyles.blueDot;
    }

    if (color === "orange") {
        return statusDistributionCardStyles.orangeDot;
    }

    return statusDistributionCardStyles.greenDot;
};

export default function StatusDistributionCard({
    title,
    statusData,
}: StatusDistributionCardProps) {
    return (
        <Paper sx={statusDistributionCardStyles.card}>
            <Typography variant="h6" sx={statusDistributionCardStyles.title}>
                {title}
            </Typography>

            <Box sx={statusDistributionCardStyles.donutWrapper}>
                <Box sx={statusDistributionCardStyles.donutChart} />
            </Box>

            <Box sx={statusDistributionCardStyles.statusList}>
                {statusData.map((status) => (
                    <Box key={status.label} sx={statusDistributionCardStyles.statusRow}>
                        <Box sx={getDotStyle(status.color)} />

                        <Typography variant="body2">{status.label}</Typography>

                        <Typography
                            variant="body2"
                            sx={statusDistributionCardStyles.statusValue}
                        >
                            {status.value}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}