import { SIDEBAR_WIDTH } from "./components/Sidebar/SidebarStyle";

export const dashboardLayoutStyles = {
    root: {
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#eef3f9",
    },

    main: {
        flexGrow: 1,
        marginLeft: `${SIDEBAR_WIDTH}px`,
        padding: 3,
        paddingTop: "100px",
    },
} as const;