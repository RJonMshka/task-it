import React, { FunctionComponent } from "react";
import { HeaderProps } from "../../types/headerTypes";
import AccountLinks from "../AccountLinks/AccountLinks";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import StyledHeader, { LogoContainer, NavContainer, AccountLinksContainer } from "./Header.styled";


const Header: FunctionComponent<HeaderProps> = ({ navLinks, authRouteDetails, logoDetails }) => {
    return <StyledHeader>
        <LogoContainer>
            <Logo {...logoDetails} />
        </LogoContainer>
        
        <NavContainer>
            <Navigation navLinks={navLinks} />
        </NavContainer>
        
        <AccountLinksContainer>
            <AccountLinks/>
        </AccountLinksContainer>
    </StyledHeader>
};

export default Header;