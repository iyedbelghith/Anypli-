import { Link } from "react-router-dom";

import { ROUTES } from "@constants/routes";
import { useAuthState, useLogout } from "@features/auth/hooks";

export default function DashboardPage() {
    const { user } = useAuthState();
    const { logout } = useLogout();

    return (
        <div>
            <h1>Dashboard</h1>

            {user && (
                <p>
                    Connecté en tant que : {user.name} - {user.role}
                </p>
            )}

            <nav>
                <Link to={ROUTES.USERS}>Aller vers Users</Link>
            </nav>

            <button onClick={logout}>Déconnexion</button>
        </div>
    );
}