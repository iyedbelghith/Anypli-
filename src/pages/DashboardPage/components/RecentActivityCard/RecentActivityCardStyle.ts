export const recentActivityCardStyles = {
    card: {
        padding: 3,
        borderRadius: 4,
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.08)",
    },

    title: {
        fontWeight: 800,
        color: "#0f172a",
        marginBottom: 3,
    },

    list: {
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
    },

    row: {
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
    },

    icon: {
        width: 36,
        height: 36,
        borderRadius: 2,
        backgroundColor: "#eff6ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#2563eb",
        flexShrink: 0,
    },

    activityTitle: {
        fontWeight: 600,
        color: "#0f172a",
    },
} as const;