import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../types/headerTypes";
import { FooterLinksContainer, FooterMark, FooterMarkContainer, StyledFooter } from "./Footer.styled";

const Footer: FunctionComponent<NavProps> = ({ navLinks }) => {
    return <StyledFooter>
        <FooterLinksContainer>
            {navLinks.map((navLink, idx) => {
                return !navLink.needAuthentication && <Link to={navLink.link} key={idx}>{navLink.text}</Link>
            })}
        </FooterLinksContainer>
        <FooterMarkContainer>
            <FooterMark>Created by: <a target="_blank" href="https://github.com/rJonMshka">Rajat Kumar</a></FooterMark>
        </FooterMarkContainer>
    </StyledFooter>;
};

export default Footer;