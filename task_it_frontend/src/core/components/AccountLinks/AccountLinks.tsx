import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { AuthRouteProps } from "../../types/headerTypes";
import { AccountLinksWrapper } from "./AccountLinks.styled";
import { IoIosLogIn } from "react-icons/io";

const AccountLinks: FunctionComponent<AuthRouteProps> = ({ routes }) => {

    return <AccountLinksWrapper>
        <Link to={"/login"} ><IoIosLogIn/> Login</Link>
        <Link to={"/registration"} >Register</Link>
    </AccountLinksWrapper>;
};

export default AccountLinks;