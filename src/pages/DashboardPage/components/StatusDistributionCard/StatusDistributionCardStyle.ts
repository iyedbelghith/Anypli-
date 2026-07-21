export const statusDistributionCardStyles = {
    card: {
        padding: 3,
        borderRadius: 4,
        minHeight: 280,
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.08)",
    },

    title: {
        fontWeight: 800,
        color: "#0f172a",
    },

    donutWrapper: {
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

    statusList: {
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
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
} as const;