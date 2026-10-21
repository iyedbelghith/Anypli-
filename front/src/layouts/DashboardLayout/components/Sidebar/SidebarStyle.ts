export const SIDEBAR_WIDTH = 260;

export const sidebarStyles = {
    drawer: {
        width: SIDEBAR_WIDTH,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
            width: SIDEBAR_WIDTH,
            boxSizing: "border-box",
            backgroundColor: "#17243d",
            color: "white",
            borderRight: "none",
        },
    },

    container: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },

    logoContainer: {
        padding: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
    },

    logoBox: {
        width: 58,
        height: 38,
        backgroundColor: "white",
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0.8,
    },

    logo: {
        width: "100%",
        height: "auto",
        objectFit: "contain",
    },

    brandName: {
        fontSize: 13,
        fontWeight: 800,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
    },

    menuLabel: {
        color: "rgba(255,255,255,0.45)",
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1px",
        paddingX: 3,
        paddingTop: 3,
        paddingBottom: 1,
    },

    navList: {
        paddingX: 2,
    },

    navItem: {
        borderRadius: 2,
        marginBottom: 0.8,
        color: "rgba(255,255,255,0.75)",
        gap: 1.5,

        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "white",
        },
    },

    activeNavItem: {
        backgroundColor: "rgba(255,255,255,0.14)",
        color: "white",

        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.14)",
        },
    },

    navIcon: {
        minWidth: 36,
        color: "inherit",
    },

    navText: {
        "& .MuiListItemText-primary": {
            fontSize: 14,
            fontWeight: 700,
        },
    },
} as const;