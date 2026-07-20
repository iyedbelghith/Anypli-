export const loginPageStyles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        padding: 2,
    },

    card: {
        width: "100%",
        maxWidth: 420,
        padding: 4,
        borderRadius: 3,
    },

    title: {
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 3,
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
    },

    button: {
        marginTop: 1,
        paddingY: 1.2,
        textTransform: "none",
        fontWeight: 600,
    },
} as const;