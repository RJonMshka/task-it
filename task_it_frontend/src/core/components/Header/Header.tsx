import React, { FunctionComponent } from "react";
import { HeaderProps } from "../../types/headerTypes";
import AccountLinks from "../AccountLinks/AccountLinks";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import HeaderAccountLoader from "../Loaders/HeaderAccountLoader";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import StyledHeader, { LogoContainer, NavContainer, AccountLinksContainer } from "./Header.styled";



const Header: FunctionComponent<HeaderProps> = ({ navLinks, authRouteDetails }) => {
    return <StyledHeader>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        
        <NavContainer>
            <Navigation navLinks={navLinks} />
        </NavContainer>
        
        <AccountLinksContainer>
            {/* <AccountLinks {...authRouteDetails} /> */}
            <HeaderAccountLoader />
            {/* <HeaderAccount name="Rajat" /> */}
        </AccountLinksContainer>
    </StyledHeader>
};

export default Header;