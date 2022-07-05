import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../types/headerTypes";
import { FooterLinksContainer, StyledFooter } from "./Footer.styled";

const Footer: FunctionComponent<NavProps> = ({ navLinks }) => {
    return <StyledFooter>
        <FooterLinksContainer>
            {navLinks.map((navLink, idx) => {
                return <Link to={navLink.link} key={idx}>{navLink.text}</Link>
            })}
        </FooterLinksContainer>
    </StyledFooter>;
};

export default Footer;