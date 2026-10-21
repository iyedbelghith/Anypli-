export const dashboardGridSizes = {
    kpiCard: {
        xs: 12,
        sm: 6,
        md: 3,
    },

    mainChart: {
        xs: 12,
        lg: 8,
    },

    sideChart: {
        xs: 12,
        lg: 4,
    },

    recentProjects: {
        xs: 12,
        lg: 8,
    },

    recentActivity: {
        xs: 12,
        lg: 4,
    },
} as const;

export const dashboardPageStyles = {
    sectionCard: {
        padding: 3,
        borderRadius: 4,
        minHeight: 280,
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.08)",
    },

    

    sectionTitle: {
        fontWeight: 800,
        color: "#0f172a",
    },

    yearBadge: {
        paddingX: 2,
        paddingY: 0.8,
        borderRadius: 3,
        backgroundColor: "#f4f7fb",
        color: "#8a97b4",
        fontWeight: 600,
    },

    barChartPlaceholder: {
        minHeight: 260,
    },

    projectBar: {
        width: 12,
        borderRadius: 2,
        backgroundColor: "#17243d",
    },

    clientBar: {
        width: 12,
        borderRadius: 2,
        backgroundColor: "#c42026",
    },

    chartLegend: {
        marginTop: 2,
    },

    legendItem: {
        display: "flex",
        alignItems: "center",
        gap: 1,
    },

    clientDot: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#c42026",
    },

    projectDot: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#17243d",
    },

    donutPlaceholder: {
        display: "flex",
        justifyContent: "center",
        marginY: 4,
    },

    donutChart: {
        width: 190,
        height: 190,
        borderRadius: "50%",
        background:
            "conic-gradient(#3b82f6 0deg 130deg, #10b981 130deg 240deg, #f59e0b 240deg 360deg)",
        position: "relative",

        "&::after": {
            content: '""',
            position: "absolute",
            inset: 45,
            borderRadius: "50%",
            backgroundColor: "white",
        },
    },

    statusRow: {
        display: "flex",
        alignItems: "center",
        gap: 1.5,
    },

    statusValue: {
        marginLeft: "auto",
        fontWeight: 700,
    },

    blueDot: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#3b82f6",
    },

    orangeDot: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#f59e0b",
    },

    greenDot: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#10b981",
    },

    viewAll: {
        color: "#17243d",
        fontWeight: 700,
        cursor: "pointer",
    },

    projectRow: {
        display: "flex",
        alignItems: "center",
        gap: 2,
        paddingY: 2,
        borderTop: "1px solid #eef2f7",
    },

    projectIcon: {
        width: 40,
        height: 40,
        borderRadius: 2,
        backgroundColor: "#f1f5f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#17243d",
    },

    projectInfo: {
        flex: 1,
    },

    projectTitle: {
        fontWeight: 700,
        color: "#0f172a",
    },

    projectStatus: {
        paddingX: 1.5,
        paddingY: 0.5,
        borderRadius: 4,
        backgroundColor: "#eff6ff",
        color: "#2563eb",
        fontSize: 13,
        fontWeight: 700,
    },

    activityRow: {
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
    },

    activityIcon: {
        width: 36,
        height: 36,
        borderRadius: 2,
        backgroundColor: "#eff6ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#2563eb",
    },

    activityTitle: {
        fontWeight: 600,
        color: "#0f172a",
    },
    sectionHeader: {
        marginBottom: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    chartBars: {
        height: 200,
        marginTop: 2,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 4,
    },

    chartBarGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
    },

    chartBarPair: {
        display: "flex",
        alignItems: "flex-end",
        gap: 0.8,
    },
    statusList: {
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
    },

    projectsList: {
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
    },

    activityList: {
        marginTop: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
    },
} as const;
