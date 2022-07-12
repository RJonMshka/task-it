import React, { FunctionComponent } from "react";
import { Navigate, Pathname } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import MainLoader from "../Loaders/MainLoader";

interface RedirectRouteProps {
    renderComponent: React.ReactNode,
    redirectPath: Pathname
}

const RedirectRoute: FunctionComponent<RedirectRouteProps> = ({ renderComponent, redirectPath }) => {
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
        return <>{renderComponent}</>;
    }

    if(isSuccess) {
        if(data.isAuthenticated) {
            console.log("authenticated");
            return <Navigate to={redirectPath} replace />; 
        }
        return <>{renderComponent}</>;
    }

    return null;
};

export default RedirectRoute;