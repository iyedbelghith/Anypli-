export const loginPageStyles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#eef3f9",
    },

    leftSection: {
        width: "52%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#17243d",
        color: "white",
        padding: "48px",
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
    },

    logoBox: {
        width: 74,
        height: 48,
        borderRadius: 1,
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
        marginTop: "145px",
        maxWidth: 580,
    },

    title: {
        fontSize: {
            md: "44px",
            lg: "52px",
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
        fontSize: "20px",
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
        fontSize: "17px",
        color: "rgba(255,255,255,0.92)",
    },

    checkCircle: {
        width: 28,
        height: 28,
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
        marginTop: "auto",
        color: "rgba(255,255,255,0.35)",
        fontSize: "14px",
    },

    rightSection: {
        flex: 1,
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: {
            xs: 2,
            sm: 4,
        },
    },

    languageWrapper: {
        position: "absolute",
        top: 32,
        right: 32,
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
    },

    loginTitle: {
        fontWeight: 800,
        color: "#0f1f3d",
        marginBottom: 1,
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

    rightFooter: {
        position: "absolute",
        bottom: 32,
        color: "#8a97b4",
        fontSize: "14px",
    },

    error: {
        marginBottom: 2,
        borderRadius: 2,
    },
} as const;