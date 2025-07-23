import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ user, redirectTo, children }) => {
    if (user == null) return <Navigate to={redirectTo} />;
    return children ? children : <Outlet />;
};