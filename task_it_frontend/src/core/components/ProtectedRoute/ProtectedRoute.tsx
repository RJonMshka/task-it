import React, { FunctionComponent } from "react";
import { Navigate, Pathname } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import MainLoader from "../Loaders/MainLoader";

interface ProtectedRouteProps {
    children: React.ReactNode,
    redirectPath: Pathname
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({ children, redirectPath="/home" }) => {
    const {
        isError,
        isLoading,
        isSuccess,
        data
    } = useAuthentication();

    if(isLoading) {
        return <MainLoader text="Loading Task It.." />;
    }

    if(isError) {
        return <Navigate to={redirectPath} replace />;
    }

    if(isSuccess) {
        if(data.isAuthenticated) {
            return <>{children}</>;
        }
        return <Navigate to={redirectPath} replace />;
    }

    return null;
};

export default ProtectedRoute;