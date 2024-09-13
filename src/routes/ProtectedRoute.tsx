import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
}

export const ProtectedRoute = ({ children }: Props) => {
    const { accessToken } = useAuth();

    // Check if the user is authenticated
    if (!accessToken) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/sign-in" />;
    }

    // If authenticated, render the child routes
    return <>{children}</>;
};