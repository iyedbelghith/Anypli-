export const usersPageStyles = {
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

    roleFilter: {
        width: 200,

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
        },
    },

    userName: {
        fontWeight: 700,
        color: "#0f172a",
    },

    roleBadge: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: 1.5,
        paddingY: 0.5,
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 700,
        backgroundColor: "#eff6ff",
        color: "#2563eb",
        textTransform: "capitalize",
    },

    activeStatus: {
        display: "inline-flex",
        paddingX: 1.5,
        paddingY: 0.5,
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 700,
        backgroundColor: "#ecfdf5",
        color: "#059669",
    },

    inactiveStatus: {
        display: "inline-flex",
        paddingX: 1.5,
        paddingY: 0.5,
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 700,
        backgroundColor: "#fef2f2",
        color: "#dc2626",
    },

    actions: {
        display: "flex",
        gap: 1,
    },

    editButton: {
        color: "#2563eb",
    },

    deleteButton: {
        color: "#dc2626",
    },
    tableRow: {
        "&:last-child td": {
            borderBottom: 0,
        },
    },

    userEmail: {
        color: "#64748b",
    },

    emptyState: {
        paddingY: 5,
        textAlign: "center",
        color: "#64748b",
    },
    pagination: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 2,
        marginTop: 3,
    },
} as const;