import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { AuthRouteProps } from "../../types/headerTypes";
import AccountHeaderOptions from "../AccountHeaderOptions/AccountHeaderOptions";
import { AccountLinksWrapper } from "./AccountLinks.styled";

const AccountLinks: FunctionComponent<AuthRouteProps> = ({ routes }) => {

    const [isAuthenticated, setAuthentication] = useState(false);

    if (isAuthenticated) {
        return <>
            <AccountHeaderOptions />
        </>;
    }

    return <AccountLinksWrapper>
        <Link to={"/login"} >Login</Link>
        <Link to={"/registration"} >Register</Link>
    </AccountLinksWrapper>;
};

export default AccountLinks;