import type { AuthTranslationType
} from "@shared/types/authTranslation.types";

export const auth: AuthTranslationType = {
  login: {
    title: "Welcome",
    subtitle: "Sign in to your management workspace",
    email: "Email",
    password: "Password",
    loginButton: "Sign in",
    loginLoading: "Signing in...",
    loginError: "Invalid email or password",
    demoCredentials: "Demo credentials: user@anypli.com / password",
  },

  branding: {
    appName: "Project Manager",
    titleLineOne: "Manage your projects",
    titleHighlight: "efficiently.",
    description:
      "Manage your clients, projects, teams and assignments from one platform.",
    featureClients: "Clients and users management",
    featureProjects: "Real-time project tracking",
    featureAssignments: "Smart team assignment",
    copyright: "© 2025 Anypli. All rights reserved.",
    },
};