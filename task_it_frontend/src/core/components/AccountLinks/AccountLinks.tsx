import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import AccountHeaderOptions from "../AccountHeaderOptions/AccountHeaderOptions";

const AccountLinks: FunctionComponent = () => {

    const [isAuthenticated, setAuthentication] = useState(false);

    if (isAuthenticated) {
        return <>
            <AccountHeaderOptions />
        </>;
    }

    return <>
        <Link to={"/login"} >Login</Link>
        <Link to={"/registration"} >Register</Link>
    </>;
};

export default AccountLinks;