export const recentProjectsCardStyles = {
    card: {
        padding: 3,
        borderRadius: 4,
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.08)",
    },

    header: {
        marginBottom: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontWeight: 800,
        color: "#0f172a",
    },

    viewAll: {
        color: "#17243d",
        fontWeight: 700,
        cursor: "pointer",
    },

    list: {
        display: "flex",
        flexDirection: "column",
    },

    row: {
        display: "flex",
        alignItems: "center",
        gap: 2,
        paddingY: 2,
        borderTop: "1px solid #eef2f7",
    },

    icon: {
        width: 40,
        height: 40,
        borderRadius: 2,
        backgroundColor: "#f1f5f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#17243d",
    },

    info: {
        flex: 1,
    },

    projectTitle: {
        fontWeight: 700,
        color: "#0f172a",
    },

    status: {
        paddingX: 1.5,
        paddingY: 0.5,
        borderRadius: 4,
        backgroundColor: "#eff6ff",
        color: "#2563eb",
        fontSize: 13,
        fontWeight: 700,
    },
} as const;