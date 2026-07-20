export const DASHBOARD_DRAWER_WIDTH = 260;

export const dashboardLayoutStyles = {
    root: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "background.default",
    },

    drawer: {
        width: DASHBOARD_DRAWER_WIDTH,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
            width: DASHBOARD_DRAWER_WIDTH,
            boxSizing: "border-box",
            backgroundColor: "#1f2937",
            color: "white",
            borderRight: "none",
        },
    },

    logoContainer: {
        padding: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
    },

    logo: {
        maxWidth: 150,
        height: "auto",
        backgroundColor: "white",
        borderRadius: 2,
        padding: 1,
    },

    navList: {
        padding: 2,
    },

    navItem: {
        borderRadius: 2,
        marginBottom: 1,
        color: "rgba(255,255,255,0.8)",

        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "white",
        },
    },

    activeNavItem: {
        backgroundColor: "#991b1b",
        color: "white",

        "&:hover": {
            backgroundColor: "#991b1b",
        },
    },

    appBar: {
        width: `calc(100% - ${DASHBOARD_DRAWER_WIDTH}px)`,
        marginLeft: `${DASHBOARD_DRAWER_WIDTH}px`,
        backgroundColor: "background.paper",
        color: "text.primary",
        boxShadow: "0 1px 8px rgba(15, 23, 42, 0.08)",
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
    },

    pageTitle: {
        fontWeight: 700,
    },

    main: {
        flexGrow: 1,
        marginLeft: `${DASHBOARD_DRAWER_WIDTH}px`,
        padding: 3,
        paddingTop: 11,
    },

    userBox: {
        display: "flex",
        alignItems: "center",
        gap: 2,
    },

    logoutButton: {
        textTransform: "none",
        fontWeight: 600,
    },
} as const;