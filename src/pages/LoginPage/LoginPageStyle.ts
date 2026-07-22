export const loginPageStyles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#eef3f9",
    },

    leftSection: {
        width: {
            md: "48%",
            lg: "52%",
        },
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#17243d",
        color: "white",
        padding: {
            md: "36px",
            lg: "48px",
        },
        display: {
            xs: "none",
            md: "flex",
        },
        flexDirection: "column",
    },

    gridOverlay: {
        position: "absolute",
        inset: 0,
        opacity: 0.12,
        backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
    },

    circleOne: {
        position: "absolute",
        width: 380,
        height: 380,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.06)",
        top: -90,
        left: -80,
    },

    circleTwo: {
        position: "absolute",
        width: 360,
        height: 360,
        borderRadius: "50%",
        backgroundColor: "rgba(196, 32, 38, 0.16)",
        right: -120,
        top: 290,
    },

    circleThree: {
        position: "absolute",
        width: 420,
        height: 420,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.05)",
        bottom: -130,
        left: 230,
    },

    brandHeader: {
        position: "relative",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexShrink: 0,
    },

    logoBox: {
        width: 74,
        height: 48,
        borderRadius: 1,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 1,
    },

    logo: {
        width: "100%",
        height: "auto",
        objectFit: "contain",
    },

    appName: {
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontWeight: 700,
        fontSize: "14px",
    },

    brandContent: {
        position: "relative",
        zIndex: 1,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: 580,
        paddingY: 4,
    },

    title: {
        fontSize: {
            md: "36px",
            lg: "48px",
            xl: "52px",
        },
        lineHeight: 1.15,
        fontWeight: 800,
        marginBottom: 3,
    },

    titleHighlight: {
        color: "#c42026",
        display: "block",
    },

    description: {
        fontSize: {
            md: "17px",
            lg: "20px",
        },
        lineHeight: 1.6,
        color: "rgba(255,255,255,0.88)",
        maxWidth: 620,
        marginBottom: 5,
    },

    featuresList: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
    },

    featureItem: {
        display: "flex",
        alignItems: "center",
        gap: 2,
        fontSize: {
            md: "15px",
            lg: "17px",
        },
        color: "rgba(255,255,255,0.92)",
    },

    checkCircle: {
        width: 28,
        height: 28,
        flexShrink: 0,
        borderRadius: "50%",
        backgroundColor: "rgba(196,32,38,0.28)",
        border: "1px solid rgba(196,32,38,0.45)",
        color: "#c42026",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: "14px",
    },

    leftFooter: {
        position: "relative",
        zIndex: 1,
        color: "rgba(255,255,255,0.35)",
        fontSize: "14px",
        flexShrink: 0,
    },

    rightSection: {
        flex: 1,
        minWidth: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
    },

    rightTopBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: {
            xs: "space-between",
            md: "flex-end",
        },
        padding: {
            xs: 2,
            sm: 3,
            md: 4,
        },
        flexShrink: 0,
    },

    mobileBrand: {
        display: {
            xs: "flex",
            md: "none",
        },
        alignItems: "center",
        gap: 1.5,
    },

    mobileLogoBox: {
        width: 56,
        height: 36,
        borderRadius: 1,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0.8,
    },

    mobileAppName: {
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        fontWeight: 800,
        fontSize: "12px",
        color: "#17243d",
    },

    rightContent: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: {
            xs: 2,
            sm: 4,
        },
        paddingY: {
            xs: 2,
            sm: 3,
        },
    },

    loginCard: {
        width: "100%",
        maxWidth: 460,
        padding: {
            xs: 3,
            sm: 5,
        },
        borderRadius: "18px",
        boxShadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
        boxSizing: "border-box",
    },

    loginTitle: {
        fontWeight: 800,
        color: "#0f1f3d",
        marginBottom: 1,
        fontSize: {
            xs: "1.75rem",
            sm: "2.125rem",
        },
    },

    loginSubtitle: {
        color: "#6b7a99",
        marginBottom: 4,
    },

    form: {
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
    },

    textField: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "white",
        },

        "& .MuiInputLabel-root": {
            color: "#0f1f3d",
            fontWeight: 600,
        },
    },

    button: {
        marginTop: 1,
        height: 50,
        borderRadius: "12px",
        backgroundColor: "#17243d",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "16px",

        "&:hover": {
            backgroundColor: "#0f1f3d",
        },
    },

    demoText: {
        marginTop: 3,
        textAlign: "center",
        color: "#8a97b4",
        fontSize: "14px",
    },

    mobileFooter: {
        display: {
            xs: "block",
            md: "none",
        },
        textAlign: "center",
        color: "#8a97b4",
        fontSize: "14px",
        padding: 2,
        flexShrink: 0,
    },

    error: {
        marginBottom: 2,
        borderRadius: 2,
    },
} as const;
