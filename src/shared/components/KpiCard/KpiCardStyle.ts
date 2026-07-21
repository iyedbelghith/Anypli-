export const kpiCardStyles = {
    card: {
        padding: 3,
        borderRadius: 3,
        minHeight: 120,
        display: "flex",
        alignitems: "center",
        gap: 2,
    },
    iconWrapper: {
        width: 52,
        height: 52,
        borderRadius: 3,
        backgroundColor: "grey.100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex : 1,
    },

    title: {
        color: "text.secondary",
        fontWeight: 600,
        fontSize: 13,
        textTransform: "uppercase",
        letterSpacing : "0,5px"

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


