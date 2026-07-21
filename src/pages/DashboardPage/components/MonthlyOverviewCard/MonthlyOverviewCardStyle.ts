export const monthlyOverviewCardStyles = {
    card: {
        padding: 3,
        borderRadius: 4,
        minHeight: 280,
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.08)",
    },

    header: {
        marginBottom: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
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

    chartWrapper: {
        minHeight: 260,
    },

    chartBars: {
        height: 200,
        marginTop: 2,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 4,
    },

    barGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
    },

    barPair: {
        display: "flex",
        alignItems: "flex-end",
        gap: 0.8,
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

    legend: {
        marginTop: 2,
        display: "flex",
        justifyContent: "center",
        gap: 2,
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
} as const;