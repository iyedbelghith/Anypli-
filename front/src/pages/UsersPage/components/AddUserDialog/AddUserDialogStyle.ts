export const addUserDialogStyles = {
    title: {
        fontWeight: 800,
        color: "#0f172a",
    },

    content: {
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        paddingTop: 1,
    },

    row: {
        display: "flex",
        gap: 2,
    },

    field: {
        flex: 1,

        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
        },
    },

    actions: {
        paddingX: 3,
        paddingBottom: 3,
    },

    cancelButton: {
        textTransform: "none",
        fontWeight: 700,
        color: "#64748b",
    },

    submitButton: {
        textTransform: "none",
        fontWeight: 700,
        borderRadius: 2,
        backgroundColor: "#17243d",

        "&:hover": {
            backgroundColor: "#0f1f3d",
        },
    },
} as const;
