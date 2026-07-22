export const dashboardLayoutStyles = {
    root: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#eef3f9",
    },

    main: {
        flexGrow: 1,
        minWidth: 0,
        width: "100%",
        padding: {
            xs: 2,
            sm: 3,
        },
        paddingTop: "100px",
        boxSizing: "border-box",
    },
} as const;
