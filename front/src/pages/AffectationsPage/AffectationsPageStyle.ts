export const affectationsPageStyles = {
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 3,
    },

    title: {
        fontWeight: 800,
        color: "#0f172a",
    },

    subtitle: {
        color: "#64748b",
        marginTop: 0.5,
    },

    addButton: {
        textTransform: "none",
        fontWeight: 700,
        borderRadius: 2,
        backgroundColor: "#17243d",
        paddingX: 2.5,

        "&:hover": {
            backgroundColor: "#0f1f3d",
        },
    },

    card: {
        padding: 3,
        borderRadius: 4,
        boxShadow: "0 2px 10px rgba(15, 23, 42, 0.08)",
    },

    filters: {
        display: "flex",
        gap: 2,
        marginBottom: 3,
    },

    searchField: {
        flex: 1,

        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            backgroundColor: "white",
        },
    },

    statusFilter: {
        width: 240,

        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            backgroundColor: "white",
        },
    },

    tableHead: {
        backgroundColor: "#f8fafc",

        "& .MuiTableCell-head": {
            fontWeight: 800,
            color: "#475569",
            fontSize: 13,
            textTransform: "uppercase",
            borderBottom: "1px solid #e2e8f0",
        },
    },

    tableRow: {
        "&:last-child td": {
            borderBottom: 0,
        },
    },

    employeeName: {
        fontWeight: 700,
        color: "#0f172a",
    },

    projectName: {
        fontWeight: 600,
        color: "#0f172a",
    },

    clientName: {
        color: "#64748b",
    },

    statusBadge: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: 1.5,
        paddingY: 0.5,
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 700,
    },

    activeStatus: {
        backgroundColor: "#eff6ff",
        color: "#2563eb",
    },

    completedStatus: {
        backgroundColor: "#ecfdf5",
        color: "#059669",
    },

    cancelledStatus: {
        backgroundColor: "#fef2f2",
        color: "#dc2626",
    },

    actions: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 1,
    },

    editButton: {
        color: "#2563eb",
        backgroundColor: "#eff6ff",

        "&:hover": {
            backgroundColor: "#dbeafe",
        },
    },

    deleteButton: {
        color: "#dc2626",
        backgroundColor: "#fef2f2",

        "&:hover": {
            backgroundColor: "#fee2e2",
        },
    },

    emptyState: {
        paddingY: 5,
        textAlign: "center",
        color: "#64748b",
    },
} as const;