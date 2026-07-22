import { SIDEBAR_WIDTH } from "../Sidebar/SidebarStyle";

export const topNavbarStyles = {
    appBar: {
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        marginLeft: `${SIDEBAR_WIDTH}px`,
        backgroundColor: "white",
        color: "#0f172a",
        boxShadow: "0 2px 12px rgba(15, 23, 42, 0.08)",
    },

    toolbar: {
        minHeight: "76px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: {
            xs: 1,
            sm: 2,
            md: 3,
        },
        flexWrap: "wrap",
        py: {
            xs: 1,
            md: 0,
        },
    },

    title: {
        fontWeight: 800,
        color: "#0f172a",
        fontSize: {
            xs: "1.15rem",
            sm: "1.35rem",
            md: "1.5rem",
        },
    },

    rightSection: {
        display: "flex",
        alignItems: "center",
        gap: {
            xs: 1,
            sm: 1.5,
            md: 2,
        },
        flexWrap: "wrap",
        justifyContent: "flex-end",
    },

    userInfo: {
        display: {
            xs: "none",
            sm: "flex",
        },
        flexDirection: "column",
        lineHeight: 1.2,
    },

    userName: {
        fontWeight: 800,
        color: "#0f172a",
        fontSize: 14,
    },

    userRole: {
        color: "#8a97b4",
        fontSize: 12,
        textTransform: "capitalize",
    },

    avatar: {
        backgroundColor: "#17243d",
        color: "white",
        fontWeight: 800,
    },

    logoutButton: {
        textTransform: "none",
        fontWeight: 700,
        whiteSpace: "nowrap",
    },
} as const;
