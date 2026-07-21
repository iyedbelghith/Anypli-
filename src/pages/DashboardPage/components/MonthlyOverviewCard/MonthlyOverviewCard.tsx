import { Box, Paper, Typography } from "@mui/material";

import type { MonthlyOverviewCardProps } from "./MonthlyOverviewCardInterface";
import { monthlyOverviewCardStyles } from "./MonthlyOverviewCardStyle";

export default function MonthlyOverviewCard({
    title,
    year,
    chartData,
    clientsLabel,
    projectsLabel,
}: MonthlyOverviewCardProps) {
    return (
        <Paper sx={monthlyOverviewCardStyles.card}>
            <Box sx={monthlyOverviewCardStyles.header}>
                <Typography variant="h6" sx={monthlyOverviewCardStyles.title}>
                    {title}
                </Typography>

                <Box sx={monthlyOverviewCardStyles.yearBadge}>{year}</Box>
            </Box>

            <Box sx={monthlyOverviewCardStyles.chartWrapper}>
                <Box sx={monthlyOverviewCardStyles.chartBars}>
                    {chartData.map((item) => (
                        <Box key={item.month} sx={monthlyOverviewCardStyles.barGroup}>
                            <Box sx={monthlyOverviewCardStyles.barPair}>
                                <Box
                                    sx={{
                                        ...monthlyOverviewCardStyles.projectBar,
                                        height: item.projects * 35,
                                    }}
                                />

                                <Box
                                    sx={{
                                        ...monthlyOverviewCardStyles.clientBar,
                                        height: Math.max(item.clients, 1) * 28,
                                    }}
                                />
                            </Box>

                            <Typography variant="caption" color="text.secondary">
                                {item.month}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={monthlyOverviewCardStyles.legend}>
                    <Box sx={monthlyOverviewCardStyles.legendItem}>
                        <Box sx={monthlyOverviewCardStyles.clientDot} />
                        <Typography variant="body2">{clientsLabel}</Typography>
                    </Box>

                    <Box sx={monthlyOverviewCardStyles.legendItem}>
                        <Box sx={monthlyOverviewCardStyles.projectDot} />
                        <Typography variant="body2">{projectsLabel}</Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}