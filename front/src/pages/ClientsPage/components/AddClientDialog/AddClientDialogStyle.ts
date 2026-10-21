export const addClientDialogStyles = {
    form: {
        display: "flex",
        flexDirection: "column",
    },

    content: {
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        paddingTop: 2,
    },

    row: {
        display: "flex",
        gap: 2,
    },

    field: {
        flex: 1,

        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            backgroundColor: "white",
        },
    },

    actions: {
        padding: 3,
        paddingTop: 2,
    },

    cancelButton: {
        textTransform: "none",
        fontWeight: 700,
    },

    submitButton: {
        textTransform: "none",
        fontWeight: 700,
        backgroundColor: "#17243d",

        "&:hover": {
            backgroundColor: "#0f1f3d",
        },
    },
} as const;