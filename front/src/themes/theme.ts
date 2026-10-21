import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#2563eb",
        },
        secondary: {
            main: "#64748b",
        },
        background: {
            default: "#f8fafc",
            paper: "#ffffff",
        },
    },

    typography: {
        fontFamily: "Inter, Arial, sans-serif",
    },

    shape: {
        borderRadius: 12,
    },
});