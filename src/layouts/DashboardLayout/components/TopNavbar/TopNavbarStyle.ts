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
        gap: 3,
    },

    title: {
        fontWeight: 800,
        color: "#0f172a",
    },

    rightSection: {
        display: "flex",
        alignItems: "center",
        gap: 2,
    },

    userInfo: {
        display: "flex",
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
    },
} as const;