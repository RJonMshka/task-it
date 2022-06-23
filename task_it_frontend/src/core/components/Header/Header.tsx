import React, { FunctionComponent } from "react";
import { HeaderProps } from "../../types/headerTypes";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import StyledHeader from "./Header.styled";


const Header: FunctionComponent<HeaderProps> = ({ navLinks, authRouteDetails, logoDetails }) => {
    return <StyledHeader>
        <Logo {...logoDetails} />
        <Navigation navLinks={navLinks} />
    </StyledHeader>
};

export default Header;