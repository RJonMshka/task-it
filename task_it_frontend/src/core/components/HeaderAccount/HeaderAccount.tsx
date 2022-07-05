import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { HeaderAccountProps } from "../../types/headerTypes";
import { HeaderAccountContainer } from "./HeaderAccount.styled";

const HeaderAccount: FunctionComponent<HeaderAccountProps> = ({ name }) => {
    if(name.length) {
        return <HeaderAccountContainer>
            <Link to="/userDetails">
                <span aria-hidden="true">{name[0]}</span>
                <span className="sr-only">{name}</span>
            </Link>
        </HeaderAccountContainer>
    }
    return <HeaderAccountContainer />;
};

export default HeaderAccount;