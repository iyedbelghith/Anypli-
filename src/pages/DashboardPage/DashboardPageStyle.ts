export const dashboardGridSizes = {
    kpiCard: {
        xs: 12,
        md: 3,
    },

    mainChart: {
        xs: 12,
        md: 8,
    },

    sideChart: {
        xs: 12,
        md: 4,
    },

    recentProjects: {
        xs: 12,
        md: 8,
    },

    recentActivity: {
        xs: 12,
        md: 4,
    },
} as const;

export const dashboardPageStyles = {
    card: {
        padding: 3,
        borderRadius: 3,
    },

    sectionCard: {
        padding: 3,
        borderRadius: 3,
        minHeight: 260,
    },

    title: {
        fontWeight: 700,
    },

    chartPlaceholder: {
        marginTop: 3,
        minHeight: 180,
        borderRadius: 2,
        backgroundColor: "grey.100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
} as const;