export const kpiCardStyles = {
    card: {
        width: "100%",
        height: "100%",
        padding: 3,
        borderRadius: 3,
        minHeight: 120,
        display: "flex",
        alignItems: "center",
        gap: 2,
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.08)",
        boxSizing: "border-box",
    },

    iconWrapper: {
        width: 52,
        height: 52,
        flexShrink: 0,
        borderRadius: 3,
        backgroundColor: "grey.100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    content: {
        flex: 1,
        minWidth: 0,
    },

    title: {
        color: "text.secondary",
        fontWeight: 600,
        fontSize: 13,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
    },

    value: {
        fontWeight: 800,
        color: "text.primary",
        marginTop: 0.5,
    },

    positiveTrend: {
        color: "success.main",
        fontWeight: 600,
        marginTop: 0.5,
    },

    negativeTrend: {
        color: "error.main",
        fontWeight: 600,
        marginTop: 0.5,
    },
} as const;
