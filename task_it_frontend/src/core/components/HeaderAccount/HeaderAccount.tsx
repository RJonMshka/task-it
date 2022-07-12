import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { HeaderAccountProps } from "../../types/headerTypes";
import { HeaderAccountContainer } from "./HeaderAccount.styled";
import { FaUserCircle } from "react-icons/fa";

const HeaderAccount: FunctionComponent<HeaderAccountProps> = ({ name }) => {
    if(name.length) {
        return <HeaderAccountContainer>
            <Link to="/userDetails">
                <FaUserCircle />
                <span>{name}</span>
            </Link>
        </HeaderAccountContainer>
    }
    return <HeaderAccountContainer />;
};

export default HeaderAccount;