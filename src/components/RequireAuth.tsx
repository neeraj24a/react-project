import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

interface Props {
    children: React.ReactNode;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
    let auth = useAuth();
    let location = useLocation();

    if (!auth?.accessToken) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}

export default RequireAuth;